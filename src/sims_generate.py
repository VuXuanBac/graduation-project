from sims import run, create_generator
from params import Channel, Side
from problems import *
import numpy as np
import pandas as pd
import os

rhoP = 0.5
rhoS = 0.5
RbP = 1.0
RbS = 1.0
PARAM_ATTRIBUTES = {"rhoP": rhoP, "rhoS": rhoS, "RbP": RbP, "RbS": RbS}
STATIC_PARAMS = list(PARAM_ATTRIBUTES.keys())
GROUP = "generate"
LOG_SPACE = 1000
prob = input("Problem? [1: Feasibility, 2: Noncoop, 3: Selfish, 4: Competitive]: ")
PREFIX = input("Prefix? ")

########## FEASIBILITY ##########
if prob == "1":

    print("========= Feasibility =========")
    N = int(input("Number of Samples: "))

    generator = create_generator(
        sample_per_items=N,
        input_file=None,
        params_init_value=PARAM_ATTRIBUTES,
        channels=[Channel.PP, Channel.PS, Channel.SP, Channel.SS],
        limit=None,
        save_all=True,
    )
    result = run(
        generator=generator,
        problem=FeasibilityProblem,
        label=f"{PREFIX}fea",
        group=GROUP,
        log_params=None,
        log_space=LOG_SPACE,
        verbose=False
    )
elif prob == "2":
    print("========= Non Coop =========")
    side = input("Side? [P, S]: ")
    side = Side.P if side == "p" else Side.S
    file = ""
    while not os.path.exists(file):
        file = input("Feasibility path: ")

    generator = create_generator(
        sample_per_items=1,
        input_file=file,
        params_init_value=None,
        channels=[Channel.PE] if side == Side.P else [Channel.SF],
        limit=None,
        save_all=True,
        static_params=STATIC_PARAMS,
    )
    result = run(
        generator=generator,
        problem=NonCoopProblem,
        label=f"{PREFIX}nc{side.lower()}",
        group=GROUP,
        log_params=None,
        log_space=LOG_SPACE,
        verbose=False,
        side=side,
    )
elif prob == "3":
    print("========= Selfish =========")
    pufile, sufile = "", ""
    while not os.path.exists(pufile):
        pufile = input("NonCoop PU path: ")
    while not os.path.exists(sufile):
        sufile = input("NonCoop SU path: ")
    result_file = input("Concat result path: ")
    pd.read_csv(pufile).merge(pd.read_csv(sufile)).to_csv(result_file, index=None)

    generator = create_generator(
        sample_per_items=1,
        input_file=result_file,
        params_init_value=None,
        channels=[Channel.PF, Channel.SE],
        limit=None,
        save_all=True,
        static_params=STATIC_PARAMS,
    )
    result = run(
        generator=generator,
        problem=SelfishProblem,
        label=f"{PREFIX}sf2",
        group=GROUP,
        log_params=None,
        log_space=LOG_SPACE,
        verbose=False,
        ignore_ailrp=True,
    )
elif prob == "4":
    print("========= Competitive =========")
    file = ""
    while not os.path.exists(file):
        file = input("Selfish path: ")

    generator = create_generator(
        sample_per_items=1,
        input_file=file,
        params_init_value=None,
        channels=None,
        limit=None,
        save_all=True,
        static_params=STATIC_PARAMS,
    )
    result = run(
        generator=generator,
        problem=CompetitiveProblem,
        label=f"{PREFIX}cp2",
        group=GROUP,
        log_params=None,
        log_space=LOG_SPACE,
        verbose=False,
        ignore_ailrs=True,
    )

print("===============================")
print(result)
