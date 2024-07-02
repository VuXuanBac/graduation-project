from problems import FeasibilityProblem
from simulator import Simulator
from params import ProblemParams, Channel, Side
from generator import SampleGenerator, CombinationGenerator, FileRecordGenerator

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
CACHE_SIZE = 500


def run(
    generator, problem, label, group, log_params=None, log_space=None, verbose=False, **problem_kwargs
):
    simulator = Simulator(
        label=label,
        problem_class=problem,
        group=group,
        simulation_dir=None,
        pop_size=20,
        variant="DE/rand/1/bin",
        CR=0.9,
        F=0.5,
        n_max_gen=50,
    )

    return simulator.start(
        generator=generator,
        verbose=verbose,
        cache_size=CACHE_SIZE,
        log_param_names=log_params,
        log_space=log_space,
        file_suffix=None,
        **problem_kwargs
    )


def create_generator(
    sample_per_items: int,
    input_file: str = None,
    params_init_value: dict = None,
    channels: list[str] = None,
    limit=None,
    save_all=True,
    static_params=None,
    **combinations
):
    params = None
    base = None
    if params_init_value is not None:
        params = ProblemParams(**(params_init_value or {}))
    if input_file:
        base = FileRecordGenerator(
            csv_file=input_file,
            params=params,
            static_params=static_params,
            param_mappings={},
            limit=limit,
            set_params_dynamic=False,
            save_all=save_all,
        )
        params = None
    if params is None and base is None:
        params = ProblemParams()

    if combinations:
        base = CombinationGenerator(
            params=params,
            base_generator=base,
            set_params_dynamic=False,
            save_all=save_all,
            **combinations
        )
        params = None

    if channels is None and input_file:
        generator = base
    else:
        generator = SampleGenerator(
            params=params,
            base_generator=base,
            no_samples_per_base_item=sample_per_items,
            sample_attributes=channels,
            sample_scale=(base.params if base else params).R0,
            retries_per_sample=100,
            set_params_dynamic=True,
            save_all=save_all,
        )
    return generator
