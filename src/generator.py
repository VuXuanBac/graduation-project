from params import *
import itertools
import numpy as np
import warnings
import pandas as pd


class FileRecordGenerator:
    def __init__(
        self,
        csv_file,
        params: ProblemParams = None,
        static_params: list[str] = None,
        param_mappings: dict[str, str] = None,
        limit=None,
        set_params_dynamic=False,
        save_all=False,
    ) -> None:
        self.file = csv_file
        self._dynamic = set_params_dynamic
        self.index = 0
        self.save_all = save_all
        self.params = params
        self._parsing(param_mappings or {}, static_params or [], limit)
        self.success = 0

    @property
    def sample_index(self):
        return self.index

    def get_success(self):
        return self.success

    def get_total_tries(self):
        return self.index

    def forward(self):
        if self.index <= self.N:
            self.success += 1
            return True
        return False

    def _parsing(self, param_mappings, static_params, limit):
        drop_columns = [k for k, v in param_mappings.items() if v is None]
        rename_columns = {k: v for k, v in param_mappings.items() if v is not None}
        data = (
            pd.read_csv(self.file)
            .drop(columns=drop_columns, errors="ignore")
            .rename(columns=rename_columns, errors="ignore")
        )
        if limit:
            data = data[:limit]
        if not self.params:
            change_params = list(set(data.columns).difference(static_params))
            self.params = ProblemParams(**data.iloc[0][static_params])
            self.data = data[change_params]
        else:
            self.data = data
        self.N = len(data)

    def consume(self):
        if self.index < self.N:
            self.params.set_params(dynamic=self._dynamic, **self.data.iloc[self.index])
            self.index += 1
            return self.params
        return None

    def params_state(self):
        if self.save_all:
            return self.params.get_state()
        else:
            return self.params.get_state(self.data.columns + [k for k, v in self.params._is_state_params.items() if v is True])

    def __str__(self) -> str:
        return f"success: {self.get_success()}, fail: {self.get_total_tries() - self.get_success()}, total_tries: {self.get_total_tries()}"


class CombinationGenerator:
    def __init__(
        self,
        params: ProblemParams,
        base_generator: FileRecordGenerator = None,
        set_params_dynamic=False,
        save_all=True,
        **combination_key_values,
    ) -> None:
        if base_generator:
            self.base = base_generator
            self.params = base_generator.consume()
        else:
            self.base = None
            self.params = params
        self.comb_attributes = list(combination_key_values.keys())
        self.comb_values = combination_key_values.values()
        self.index = 0
        self._dynamic = set_params_dynamic
        self.save_all = save_all
        self._reset_combination_iters()

    def _reset_combination_iters(self):
        self.comb_iters = itertools.product(
            *[v if isinstance(v, list) else [v] for v in self.comb_values]
        )

    def consume(self):
        try:
            if self.comb_attributes:
                comb_values = next(self.comb_iters)
                comb = dict(zip(self.comb_attributes, comb_values))
                self.params.set_params(dynamic=self._dynamic, **comb)

            self.index += 1
            return self.params
        except StopIteration:
            if self.base:
                self._reset_combination_iters()
                if self.base.consume():
                    return self.consume()

            return None

    def params_state(self):
        current = self.params.get_state(self.comb_attributes)
        if self.base and self.save_all:
            return current | self.base.params_state()
        return current


class SampleGenerator:
    def __init__(
        self,
        params,
        base_generator: FileRecordGenerator | CombinationGenerator,
        no_samples_per_base_item,
        sample_attributes,
        sample_scale,
        retries_per_sample=None,
        set_params_dynamic=False,
        save_all=False,
    ):
        self.N = no_samples_per_base_item
        self.B = base_generator
        self._R = retries_per_sample
        self.params = base_generator.params if base_generator else params

        self.fail = 0
        self._no_generated_samples = 0
        self.sample_attributes = sample_attributes
        self.sample_scale = sample_scale
        self.sample_index = -1
        self.data = []
        self.end = False
        self._dynamic = set_params_dynamic
        if base_generator:
            base_generator.consume()
        self.index = 0
        self.no_sample_tries = 0
        self.save_all = save_all

    def _generate_samples(self):
        self.data = (
            np.random.rand(self.N * 3, len(self.sample_attributes)) * self.sample_scale
        )

    def _next(self):
        self.sample_index += 1
        if self.sample_index >= len(self.data):
            self._generate_samples()
            self.sample_index = 0
            self._no_generated_samples += len(self.data)
        values = self.data[self.sample_index]
        self.params.set_params(
            dynamic=self._dynamic, **dict(zip(self.sample_attributes, values))
        )
        return self.params

    def forward(self):
        if self.end:
            return False
        self.index += 1
        self.no_sample_tries = 0
        if self.index % self.N == 0:
            if (not self.B) or (not self.B.consume()):
                self.end = True
        return not self.end

    def params_state(self):
        base_state = self.B.params_state() if self.B else {}
        if self.save_all:
            return base_state | self.params.get_state()
        else:
            return base_state or self.params.get_state()

    def consume(self):
        if self.end:
            return None
        if self.no_sample_tries == self._R:
            warnings.warn(
                f"retries reach maximal for sample at index {self.index} for group {self.B.index}"
            )
            self.fail += 1
            self.forward()
            if self.end:
                return None
        self.no_sample_tries += 1
        return self._next()

    def get_total_tries(self):
        return self._no_generated_samples - len(self.data) + self.sample_index + 1

    def get_success(self):
        return self.index - self.fail

    def __str__(self) -> str:
        return f"success: {self.get_success()}, fail: {self.fail}, total_tries: {self.get_total_tries()}"
