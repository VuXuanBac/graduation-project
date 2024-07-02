from enum import Enum
import numpy as np
from scipy.special import expi


class Channel(str, Enum):
    PP = "Dpp"
    PS = "Dps"
    SS = "Dss"
    SP = "Dsp"
    PE = "Dpe"
    PF = "Dpf"
    SE = "Dse"
    SF = "Dsf"


class Side(str, Enum):
    P = "P"
    S = "S"


class Params:
    def __init__(
        self,
        PP=None,
        PS=None,
        NP=None,
        NS=None,
        NE=None,
        NF=None,
        RbP=None,
        RbS=None,
        RsP=None,
        RsS=None,
        R0=None,
    ):
        RbP = RbP or 1.0
        RbS = RbS or 1.0
        RsP = RsP or 0.8 * RbP
        RsS = RsS or 0.8 * RbS
        # noise power spectral density Watt/Hz
        self.NP = NP or 1
        self.NE = NE or 1
        self.NS = NS or 1
        self.NF = NF or 1
        # transmit max power Watt
        self.PP = PP or 20
        self.PS = PS or 20
        # codeword rates bps/Hz
        self.RbP = RbP
        self.RbS = RbS
        # transmission rates bps/Hz, default is 80% of Rb
        self.RsP = RsP
        self.RsS = RsS

        self.gammaP = 2**RbP - 1
        self.gammaS = 2**RbS - 1
        self.gammaPs = 2 ** (RbP - RsP) - 1
        self.gammaSs = 2 ** (RbS - RsS) - 1

        # channel related
        self.R0 = R0 or 30

    def get_state(self, attributes=None):
        if attributes is None:
            return {k: v for (k, v) in self.__dict__.items() if self.is_state_param(k)}
        return {k: v for (k, v) in self.__dict__.items() if k in attributes}

    def is_state_param(self, name):
        return True

    def get_default(self, key, default):
        if not hasattr(self, key) or getattr(self, key) is None:
            setattr(self, key, default)
            return default
        return getattr(self, key)

    def set_params(self, **keys_values):
        for key, value in keys_values.items():
            setattr(self, key, value)

    def __str__(self):
        return str(vars(self))


class U:
    @staticmethod
    def omega(d):
        """
        Channel Mean Gain
        $Omega_X = Omega_0 * d^alpha$
        """
        if d is None:
            return None
        alpha = 3.5
        reference_distance = 20
        PTx = 10
        PRx = 10**0.5
        return (PRx * (reference_distance**alpha)) / (PTx * (d**alpha))

    @staticmethod
    def s_exp(x):
        return np.nan_to_num(np.exp(x))

    @staticmethod
    def s_expi(x):
        return np.nan_to_num(expi(x))

    @staticmethod
    def s_(x):
        return np.nan_to_num(x)


class ProblemParams(Params):
    def __init__(
        self,
        PP=None,
        PS=None,
        NP=None,
        NS=None,
        NE=None,
        NF=None,
        RbP=None,
        RbS=None,
        RsP=None,
        RsS=None,
        rhoP=None,
        rhoS=None,
        thetaS=None,
        R0=None,
    ):
        super().__init__(PP, PS, NP, NS, NE, NF, RbP, RbS, RsP, RsS, R0)

        # reliablity related: ratio of sigma(P|S) per maximal sigma(P|S): ensure the problem is solvable
        self.rhoP = rhoP or 0.0
        self.rhoS = rhoS or 0.0
        self.thetaS = thetaS
        self._is_state_params = {
            k: (v is not None)
            for k, v in locals().items()
            if k not in ["self", "__class__"]
        }

    def is_state_param(self, name: str):
        return self._is_state_params.get(name, True) and not name.startswith(
            ("O", "gamma", "_")
        )

    # dynamic means channel and some params are changed together, otherwise they must be set manually
    def set_params(self, dynamic=True, **keys_values):
        for key, value in keys_values.items():
            if key[0] == "D":
                channel = key[1:]
                setattr(self, f"D{channel}", value)
                setattr(self, f"O{channel}", U.omega(value))
            else:
                setattr(self, key, value)
        if dynamic:
            self._set_others_dynamic(keys_values)
        else:
            self._set_others_custom(keys_values)

    def _set_others_custom(self, keys_values):
        # reliablity related: minimum transmission probability
        sigmaPmax = getattr(self, "sigmaPmax", None)
        if "sigmaP" not in keys_values:
            self.sigmaP = sigmaPmax * self.rhoP if sigmaPmax else None
        sigmaSmax = getattr(self, "sigmaSmax", None)
        if "sigmaS" not in keys_values:
            self.sigmaS = sigmaSmax * self.rhoS if sigmaSmax else None

    def _set_others_dynamic(self, keys_values):
        if "Dpp" in keys_values and "Dss" in keys_values:
            # reliablity related: minimum transmission probability
            sigmaP_PP = self.ptx_power_max(side=Side.P)
            sigmaS_PS = self.ptx_power_max(side=Side.S)
            self.sigmaPmax = sigmaP_PP
            self.sigmaSmax = sigmaS_PS
            self.sigmaP = sigmaP_PP * self.rhoP
            self.sigmaS = sigmaS_PS * self.rhoS

    def ptx(self, pp, ps, side=Side.P):
        if side == Side.P:
            f = pp * self.Opp
            s = ps * self.Osp
            N = self.NP
            gamma = self.gammaP
        else:
            f = ps * self.Oss
            s = pp * self.Ops
            N = self.NS
            gamma = self.gammaS
        return (f * U.s_exp(-gamma * N / f)) / (s * gamma + f)

    def ptx_nc(self, power, side=Side.P):
        if side == Side.P:
            f = power * self.Opp
            return U.s_exp(-self.gammaP * self.NP / f)
        else:
            f = power * self.Oss
            return U.s_exp(-self.gammaS * self.NS / f)

    def ptx_power_max(self, side=Side.P):
        if side == Side.P:
            return U.s_exp(-(self.gammaP * self.NP) / (self.PP * self.Opp))
        else:
            return U.s_exp(-(self.gammaS * self.NS) / (self.PS * self.Oss))

    def ptx_invert(self, sigma=None, side=Side.P):
        if side == Side.P:
            a = (self.NP * self.gammaP) / self.Opp
            b = self.sigmaP if sigma is None else sigma
            c = self.Opp / (self.Osp * self.gammaP)
        else:
            a = (self.NS * self.gammaS) / self.Oss
            b = self.sigmaS if sigma is None else sigma
            c = self.Oss / (self.Ops * self.gammaS)
        return lambda x: x * c * (U.s_(U.s_exp(-a / x) / b) - 1)

    def leakage_rate_nc(self, power, side=Side.P):
        if side == Side.P:
            k = self.NE / (power * self.Ope)
            kr = -k * self.gammaP - k
            ks = -k * self.gammaPs - k
        else:
            k = self.NF / (power * self.Osf)
            kr = -k * self.gammaS - k
            ks = -k * self.gammaSs - k
        return U.s_exp(k) * (U.s_expi(kr) - U.s_expi(ks)) / np.log(2)

    def leakage_rate_co(self, pp, ps, side=Side.P):
        if side == Side.P:
            k = self.NE / (pp * self.Ope)
            l = (ps * self.Ose) / (pp * self.Ope)
            k_l = self.NE / (ps * self.Ose)
            kRb = k * self.gammaP
            kRbRs = k * self.gammaPs
        else:
            k = self.NF / (ps * self.Osf)
            l = (pp * self.Opf) / (ps * self.Osf)
            k_l = self.NF / (pp * self.Opf)
            kRb = k * self.gammaS
            kRbRs = k * self.gammaSs
        return (
            (U.s_exp(k_l) * (U.s_expi(-kRb - k_l) - U.s_expi(-kRbRs - k_l)))
            - (U.s_exp(k) * (U.s_expi(-kRb - k) - U.s_expi(-kRbRs - k)))
        ) / ((l - 1) * np.log(2))
        # return np.where(
        #     np.isclose(l, 1),
        #     (
        #         (
        #             U.s_exp(-kRb) / (kRb / k + 1) + U.s_exp(k) * U.s_expi(-kRb - k) * k
        #         )  # note that inf * 0.0 --> nan. So make it safe
        #         - (
        #             U.s_exp(-kRbRs) / (kRbRs / k + 1)
        #             + U.s_exp(k) * U.s_expi(-kRbRs - k) * k
        #         )
        #     )
        #     / (-np.log(2)),
        #     (
        #         (U.s_exp(k_l) * (U.s_expi(-kRb - k_l) - U.s_expi(-kRbRs - k_l)))
        #         - (U.s_exp(k) * (U.s_expi(-kRb - k) - U.s_expi(-kRbRs - k)))
        #     )
        #     / ((l - 1) * np.log(2)),
        # )
