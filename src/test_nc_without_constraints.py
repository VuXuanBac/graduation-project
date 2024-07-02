from params_problem import *
from pymoo.core.problem import Problem
from generator import *
from simulator import Simulator

ID = "NCF"
INPUT = r"P:\School\20232\Graduate\Project\simulation\generate\SFF-20240625223823\result-20240625223823.csv"


class NonCoopProblem(Problem):
    def __init__(self, params: ProblemParams, side=Side.P):
        self.P = params
        self.side = side
        self.sigma = params.sigmaP if side == Side.P else params.sigmaS
        self.prefix = f"{ID}{side}"
        min_power = 1e-5
        max_power = params.PP if side == Side.P else params.PS
        super().__init__(
            n_var=1,
            n_obj=1,
            xl=np.array([min_power]),
            xu=np.array([max_power]),
        )

    def _evaluate(self, x, out):
        out["F"] = [self.P.leakage_rate_nc(x, side=self.side)]

    def get_output(self, result):
        if result.F == None:
            return None
        return {
            f"{self.prefix}.LRmin": result.F[0],
            f"{self.prefix}.p{self.side.lower()}": result.X[0],
            f"{self.prefix}.ptx": self.P.ptx_nc(result.X[0], side=self.side),
        }


STATIC_PARAMS = [
    "PP",
    "PS",
    "NP",
    "NS",
    "NE",
    "NF",
    "rhoP",
    "rhoS",
    "R0",
    "RbP",
    "RbS",
    "RsS",
    "RsP",
]
generator = FileRecordGenerator(
    csv_file=INPUT,
    static_params=STATIC_PARAMS,
    param_mappings={},
    limit=None,
    set_params_dynamic=False,
    save_all=True,
)

simulator = Simulator(
    label=ID,
    problem_class=NonCoopProblem,
    group="generate",
    simulation_dir=None,
    pop_size=20,
    variant="DE/rand/1/bin",
    CR=0.9,
    F=0.5,
    n_max_gen=50,
)

result_file = simulator.start(
    generator=generator,
    verbose=True,
    cache_size=500,
    log_space=500,
    log_param_names=None,
)

print(f"RESULT AT {result_file}")
