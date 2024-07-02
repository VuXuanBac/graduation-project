from sims import run, create_generator
from params import Channel
from problems import CompetitiveProblem
import numpy as np

GROUP = "competitive"
N = 1
THETA_S = [0.2, 0.5, 0.8]
LOG_SPACE = 1000

prob = input("Problem? [1 for thetaS]: ")
file = input("Feasibility file: ")
limit = int(input("Limit: "))
if limit <= 0:
    limit = None

########## THETA S ##########
if prob == "1":
    print("ThetaS: ", THETA_S)
    index = input("Index? ")
    if index:
        ThetaS = [THETA_S[int(index)]]
    else:
        ThetaS = THETA_S
    for thetaS in ThetaS:
        generator = create_generator(
            sample_per_items=N,
            input_file=file,
            params_init_value={"thetaS": thetaS},
            channels=[Channel.PE, Channel.SE, Channel.PF, Channel.SF],
            limit=limit,
            save_all=False,
        )
        result = run(
            generator=generator,
            problem=CompetitiveProblem,
            label=f"thetas{thetaS}",
            group=GROUP,
            log_params=["thetaS"],
            log_space=LOG_SPACE,
            verbose=True,
            ignore_ailrs=False,
        )
##########  ##########
else:
    pass

print("===============================")
print(result)
