import os
import pandas as pd
from datetime import datetime

from pymoo.algorithms.soo.nonconvex.de import DE
from pymoo.operators.sampling.lhs import LHS
from pymoo.termination.default import DefaultSingleObjectiveTermination
from pymoo.optimize import minimize

from params import Params
from generator import SampleGenerator


class Simulator:
    def __init__(
        self,
        label,
        problem_class,
        group=None,
        simulation_dir=None,
        demo=False,
        **metaparams,
    ):
        if simulation_dir is None:
            simulation_dir = os.path.join(os.path.abspath(os.getcwd()), "simulation")
        dirpath = os.path.join(simulation_dir, group or 'g', f"{label}-{datetime.now().strftime('%Y%m%d%H%M%S')}")
        if not demo and not os.path.exists(dirpath):
            os.makedirs(dirpath)
        self.base = dirpath
        self.problem_class = problem_class
        # self.params = params
        self.algorithm = self.get_algorithm(**metaparams)
        self.termination = self.get_termination(**metaparams)
        self.demo = demo

    def get_algorithm(self, **params):
        return DE(
            pop_size=params.get("pop_size", 20),
            sampling=LHS(),
            variant=params.get("variant", "DE/rand/1/bin"),
            CR=params.get("CR", 0.9),
            F=params.get("F", 0.5),
            dither="vector",
            jitter=False,
        )

    def get_termination(self, **params):
        return DefaultSingleObjectiveTermination(
            xtol=params.get("xtol", 1e-4),
            cvtol=params.get("cvtol", 1e-6),
            ftol=params.get("ftol", 1e-4),
            period=params.get("period", 30),
            n_max_gen=params.get("n_max_gen", 50),
        )

    def test(self, params: Params):
        problem = self.problem_class(params)
        res = minimize(problem, self.algorithm, self.termination, verbose=False)
        output = problem.get_output(res)

        if output:
            return {**params.get_state(), **output}
        return None

    def start(
        self,
        generator: SampleGenerator,
        verbose=False,
        cache_size=10,
        log_param_names=None,
        log_space=None,
        file_suffix=None,
        **problem_kwargs,
    ):
        file_suffix = file_suffix or datetime.now().strftime("%Y%m%d%H%M%S")
        result_file = os.path.join(self.base, f"result-{file_suffix}.csv")
        log_file = os.path.join(self.base, f"log-{file_suffix}.txt")

        results = []
        start_at = datetime.now()

        params = generator.params
        log_space = log_space or generator.N

        while generator.consume():
            problem = self.problem_class(params, **problem_kwargs)
            res = minimize(problem, self.algorithm, self.termination, verbose=False)
            output = problem.get_output(res)
            if self.demo:
                print(
                    f"{generator.sample_index} for sample {generator.index} {generator.params_state()} ==> [{'PASS' if output else 'FAIL'}] "
                )
            if output:  # success
                # append result to file
                results.append({**generator.params_state(), **output})
                if (not self.demo) and cache_size and len(results) == cache_size:
                    self.save(result_file, results)
                success = generator.get_success() + 1
                # notify
                if success % log_space == 0:
                    # print to console
                    if self.demo or verbose:
                        print(
                            f"Success {success:>4}/{generator.get_total_tries():>4}\t\tRunning Time: {self.running_time(start_at):0.2f} mins"
                        )
                    # log to file
                    if not self.demo:
                        self.log(
                            log_file,
                            (
                                params.get_state(log_param_names)
                                if log_param_names
                                else {}
                            ),
                            start_at,
                            success,
                            generator.get_total_tries(),
                        )
                generator.forward()
            elif self.demo:
                results.append({**generator.params_state()})
        if not self.demo:
            print(generator, file=open(log_file, "a"))
            # flush remaining
            self.save(result_file, results)
            return result_file

    def save(self, file, results):
        pd.DataFrame(results).to_csv(
            file, index=False, header=(not os.path.exists(file)), mode="a"
        )
        results.clear()

    def running_time(self, start: datetime):
        return (datetime.now() - start).seconds / 60

    def log(self, file, log_params, start_at, success, total, *text):
        timestamp = f"{datetime.now().strftime('%m-%d:%H-%M-%S')}"
        runtime = f"Running Time: {self.running_time(start_at):0.2f} mins"
        result = f"Success {success}/{total} = {success / (total) * 100:0.2f} %"
        params = ",".join([f"{key}={value}" for key, value in log_params.items()])

        row = [timestamp, params, result, runtime] + [str(t) for t in text]
        with open(file, "a") as file:
            print("  |  ".join(row), file=file)
