from params_problem import *
from pymoo.core.problem import Problem
from generator import *
from simulator import Simulator

ID = "SFF"
N = 10000


# Bài toán này đi cực tiểu hóa tốc độ lộ thông tin trung bình tại SU
# Đảm bảo:
# 1. Tốc độ lộ thông tin trung bình tại PU phải ít hơn so với khi chỉ có PU truyền một mình
# 2. Các ràng buộc tin cậy liên quan đến sigmaP, sigmaS, PPmax và PSmax trong bài toán `prob_constraints`
class SelfishProblem(Problem):
    def __init__(self, params: ProblemParams, ignore_airlp=False):
        self.P = params
        self.ignore_p = ignore_airlp
        self.prefix = ID
        super().__init__(
            n_var=2,
            n_obj=1,
            n_ieq_constr=(0 if ignore_airlp else 1),
            xl=np.array([1e-9, 1e-9]),
            xu=np.array([params.PP, params.PS]),
        )
        # Giá trị này là nghiệm của bài toán `prob_noncoop` cho PU
        # Giá trị này bị trừ 1e-9 để tốc độ lộ tin trung bình khi hợp tác luôn NHỎ HƠN HẲN khi không hợp tác
        self.NC = (
            params.get_default("NCP.LRmin", params.leakage_rate_nc(params.PP, Side.P))
            - 1e-9
        )

    def _evaluate(self, x, out):
        P = self.P
        pp, ps = x[:, 0], x[:, 1]
        out["F"] = [P.leakage_rate_co(pp, ps, Side.S)]
        out["G"] = []
        if not self.ignore_p:
            out["G"].append(
                P.leakage_rate_co(pp, ps, Side.P) - self.NC,
            )

    def get_output(self, result):
        if result.F == None:
            return None
        pp, ps = result.X
        return {
            f"{self.prefix}.pp": pp,
            f"{self.prefix}.ps": ps,
            f"{self.prefix}.RLS": result.F[0],
            f"{self.prefix}.RLP": self.P.leakage_rate_co(pp, ps, Side.P),
            f"{self.prefix}.ptxP": self.P.ptx(pp, ps, side=Side.P),
            f"{self.prefix}.ptxS": self.P.ptx(pp, ps, side=Side.P),
        }


params = ProblemParams(
    PP=20, PS=20, NP=1, NS=1, rhoP=0.05, rhoS=0.05, R0=30, RbP=1.0, RbS=1.0
)

generator = SampleGenerator(
    params=params,
    base_generator=None,
    no_samples_per_base_item=N,
    sample_attributes=[
        Channel.PP,
        Channel.PS,
        Channel.SP,
        Channel.SS,
        Channel.PE,
        Channel.PF,
        Channel.SE,
        Channel.SF,
    ],
    sample_scale=params.R0,
    retries_per_sample=100,
    set_params_dynamic=True,
    save_all=True,
)

simulator = Simulator(
    label=ID,
    problem_class=SelfishProblem,
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
    cache_size=min(N // 10, 500),
    log_space=500,
    log_param_names=None,
)

print(f"RESULT AT {result_file}")
