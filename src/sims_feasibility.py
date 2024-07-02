from sims import run, create_generator
from params import Channel
from problems import FeasibilityProblem
import numpy as np

GROUP = "feasibility"
prob = input("Problem? [1 for Rb, 2 for rho]: ")
N = int(input("Number of Samples: "))
LOG_SPACE = None
########## RB ##########
if prob == "1":
    rhoP = 0.5
    rhoS = 0.5
    RbP = [0.5]
    RbS = list(np.round(np.linspace(1.6, 2.0, 5), 2))  # step = 0.1

    generator = create_generator(
        sample_per_items=N,
        input_file=None,
        params_init_value={"rhoP": rhoP, "rhoS": rhoS},
        channels=[Channel.PP, Channel.PS, Channel.SP, Channel.SS],
        limit=None,
        save_all=False,
        RbP=RbP,
        RbS=RbS,
    )
    result = run(
        generator=generator,
        problem=FeasibilityProblem,
        label="rb",
        group=GROUP,
        log_params=["rhoP", "rhoS", "RbP", "RbS"],
        log_space=LOG_SPACE,
        verbose=True,
    )
########## RHO ##########
else:
    rhoS = list(np.round(np.linspace(0.05, 0.95, 19), 2))  # step = 0.05
    rhoP = [0.5, 0.9]
    RbP = 1.0
    RbS = 1.0

    generator = create_generator(
        sample_per_items=N,
        input_file=None,
        params_init_value={"RbP": RbP, "RbS": RbS},
        channels=[Channel.PP, Channel.PS, Channel.SP, Channel.SS],
        limit=None,
        save_all=False,
        rhoP=rhoP,
        rhoS=rhoS,
    )
    result = run(
        generator=generator,
        problem=FeasibilityProblem,
        label="rho",
        group=GROUP,
        log_params=["rhoP", "rhoS", "RbP", "RbS"],
        log_space=LOG_SPACE,
        verbose=True,
    )

print("===============================")
print(result)
