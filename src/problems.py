from params import *
from pymoo.core.problem import Problem

################ FEASIBILITY ######################
# ptxS >= sigmaS
# Bài này tìm giá trị lớn nhất có thể đạt được của sigmaS khi cả PU và SU cùng truyền.
# Cụ thể: Khi PU xác định sẵn RbP và sigmaP (dựa trên rhoP * sigmaPmax), SU xác định sẵn RbS
#             thì giá trị lớn nhất có thể của sigmaS đạt được là bao nhiêu (khi pp và ps thay đổi)

# Feasibility Check: Giá trị sigmaS* luôn nhỏ hơn giá trị khi chỉ có SU truyền.


class FeasibilityProblem(Problem):
    def __init__(self, params: ProblemParams):
        self.P = params
        self.prefix = "FEA"
        super().__init__(
            n_var=1,
            n_obj=1,
            n_ieq_constr=2,
            xl=np.array([params.sigmaS or 0.0]),
            xu=np.array([1.0]),
        )

    def G(self, sigma):
        P = self.P
        phi_p = P.ptx_invert(side=Side.P)
        phi_s = P.ptx_invert(sigma=sigma, side=Side.S)
        return [P.PP - phi_s(phi_p(P.PP)), P.PS - phi_p(phi_s(P.PS))]

    def _evaluate(self, x, out):
        out["F"] = [-x]
        out["G"] = self.G(x)

    def get_output(self, result):
        if result.F == None:
            return None
        return {f"{self.prefix}.SIGMA_S": -result.F[0]}


################ NON COOPERATIVE ######################
# Bài này tìm giá trị nhỏ nhất có thể đạt được của tốc độ lộ tin trung bình tại
# PU hoặc SU khi chỉ truyền một mình
# Đảm bảo:
#   1. Xác suất truyền tin (không hợp tác) ít nhất bằng một ngưỡng sigma xác định


class NonCoopProblem(Problem):
    def __init__(self, params: ProblemParams, side=Side.P):
        self.P = params
        self.side = side
        self.sigma = params.sigmaP if side == Side.P else params.sigmaS
        self.prefix = f"NC{side}"
        min_power = 1e-7
        max_power = params.PP if side == Side.P else params.PS
        super().__init__(
            n_var=1,
            n_obj=1,
            n_ieq_constr=1,
            xl=np.array([min_power]),
            xu=np.array([max_power]),
        )

    def _evaluate(self, x, out):
        out["F"] = [self.P.leakage_rate_nc(x, side=self.side)]
        out["G"] = [self.sigma - self.P.ptx_nc(x, side=self.side)]

    def get_output(self, result):
        if result.F == None:
            return None
        return {
            f"{self.prefix}.RL": result.F[0],
            f"{self.prefix}.P{self.side}": result.X[0],
            f"{self.prefix}.PTX": self.sigma - result.G[0],
        }


################ SELFISH ######################
# Bài toán này đi cực tiểu hóa tốc độ lộ thông tin trung bình tại SU
# Đảm bảo:
# 1. Tốc độ lộ thông tin trung bình tại PU phải ít hơn so với khi chỉ có PU truyền một mình
# 2. Các ràng buộc tin cậy liên quan đến sigmaP, sigmaS, PPmax và PSmax trong bài toán FEASIBILITY


class SelfishProblem(Problem):
    def __init__(self, params: ProblemParams, ignore_ailrp=False):
        self.P = params
        self.ignore_p = ignore_ailrp
        self.prefix = f"BS{'2' if ignore_ailrp else '3'}"
        super().__init__(
            n_var=2,
            n_obj=1,
            n_ieq_constr=2 if ignore_ailrp else 3,
            xl=np.array([0.0, 0.0]),
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
        out["G"] = [
            P.sigmaP - P.ptx(pp, ps, Side.P),
            P.sigmaS - P.ptx(pp, ps, Side.S),
        ]
        if not self.ignore_p:
            out["G"].append(
                P.leakage_rate_co(pp, ps, Side.P) - self.NC,
            )

    def get_output(self, result):
        if result.F == None:
            return None
        pp, ps = result.X
        return {
            f"{self.prefix}.PP": pp,
            f"{self.prefix}.PS": ps,
            f"{self.prefix}.RLS": result.F[0],
            f"{self.prefix}.RLP": self.P.leakage_rate_co(pp, ps, Side.P),
            f"{self.prefix}.PTXP": self.P.sigmaP - result.G[0],
            f"{self.prefix}.PTXS": self.P.sigmaS - result.G[1],
        }


################ COMPETITIVE ######################
# Bài toán này đi cực tiểu hóa tốc độ lộ thông tin trung bình tại PU
# Đảm bảo:
# 1. Tốc độ lộ thông tin trung bình tại SU phải <= \thetaS
# 2. Các ràng buộc tin cậy liên quan đến sigmaP, sigmaS, PPmax và PSmax trong bài toán FEASIBILITY


class CompetitiveProblem(Problem):
    def __init__(self, params: ProblemParams, ignore_ailrs=False):
        self.P = params
        self.ignore_s = ignore_ailrs
        self.prefix = f"BP{'2' if ignore_ailrs else '3'}"
        super().__init__(
            n_var=2,
            n_obj=1,
            n_ieq_constr=2 if ignore_ailrs else 3,
            xl=np.array([0.0, 0.0]),
            xu=np.array([params.PP, params.PS]),
        )
        if not ignore_ailrs:
            if hasattr(params, "thetaS"):
                self.thetaS = params.thetaS
            elif hasattr(params, "NCS.RL"):
                self.thetaS = getattr(params, "NCS.RL")
            else:
                self.thetaS = params.leakage_rate_nc(params.PS, Side.S)

    def _evaluate(self, x, out):
        P = self.P
        pp, ps = x[:, 0], x[:, 1]
        out["F"] = [P.leakage_rate_co(pp, ps, Side.P)]
        out["G"] = [
            P.sigmaP - P.ptx(pp, ps, Side.P),
            P.sigmaS - P.ptx(pp, ps, Side.S),
        ]
        if not self.ignore_s:
            out["G"].append(
                P.leakage_rate_co(pp, ps, Side.S) - self.thetaS,
            )

    def get_output(self, result):
        if result.F == None:
            return None
        pp, ps = result.X
        return {
            f"{self.prefix}.PP": pp,
            f"{self.prefix}.PS": ps,
            f"{self.prefix}.RLP": result.F[0],
            f"{self.prefix}.RLS": self.P.leakage_rate_co(pp, ps, Side.S),
            f"{self.prefix}.PTXP": self.P.sigmaP - result.G[0],
            f"{self.prefix}.PTXS": self.P.sigmaS - result.G[1],
        }
