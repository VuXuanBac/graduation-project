import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import glob
import os
import re


def plot_3d(
    Zfunc,
    minX,
    maxX,
    minY,
    maxY,
    minZ,
    maxZ,
    step=0.05,
    contour=False,
    surface=True,
    invertY=False,
    invertX=True,
    invertZ=False,
    **kwargs,
):
    fig, ax = plt.subplots(subplot_kw={"projection": "3d"}, figsize=(12, 8))

    # fig.set_figwidth(12)
    # fig.set_figheight(8)
    # Make data.
    X = np.arange(minX, maxX, step)
    Y = np.arange(minY, maxY, step)
    X, Y = np.meshgrid(X, Y)

    Z = Zfunc(X, Y)
    Z[Z > maxZ] = maxZ
    Z[Z < minZ] = minZ

    # Plot the surface.
    if surface:
        surf = ax.plot_surface(
            X, Y, Z, alpha=0.2 if contour else 0.8, cmap="coolwarm", antialiased=True
        )
        # Add a color bar which maps values to colors.
        fig.colorbar(surf, shrink=0.5, aspect=5)

    ax.set(
        xticks=np.linspace(minX, maxX, 5),
        yticks=np.linspace(minY, maxY, 5),
        # zticks=np.linspace(minZ, maxZ, 7),
        xlim=(minX, maxX),
        ylim=(minY, maxY),
        zlim=(minZ, maxZ),
        **kwargs,
    )
    # Customize the z axis.

    if invertX:
        ax.invert_xaxis()

    if invertY:
        ax.invert_yaxis()

    if invertZ:
        ax.invert_zaxis()

    if contour:
        ax.contour(X, Y, Z, zdir="z", offset=minZ, cmap="coolwarm")
        ax.contour(X, Y, Z, zdir="x", offset=maxX, cmap="coolwarm")
        ax.contour(X, Y, Z, zdir="y", offset=maxY, cmap="coolwarm")

    plt.show()


def plot(
    data: pd.DataFrame,
    kind="line",
    legend_title=None,
    xlabel=None,
    ylabel=None,
    xticks_gap=None,
    yticks_gap=None,
    xlim=None,
    ylim=None,
    markevery=None,
    labels=None,
):
    if kind == "line" and len(data.columns) > 1:
        for i, d in enumerate(data):
            plot = plt.plot(
                data[d],
                marker=MARKERS[i],
                markevery=markevery,
                label=(labels[i] if labels else d),
            )
    else:
        plot = data.plot(kind=kind)
    if len(data.columns) > 1:
        plt.legend(title=legend_title or "")
    if xlabel:
        plt.xlabel(xlabel)
    if ylabel:
        plt.ylabel(ylabel)
    if ylim:
        plt.ylim(ylim)
    if xlim:
        plt.xlim(xlim)
    if xticks_gap:
        # plt.xticks(np.round(np.arange(xmin, xmax + 0.1, xticks_gap), 2))
        plt.xticks(np.unique(np.round(plot.get_xticks() / xticks_gap) * xticks_gap))
    if yticks_gap:
        # plt.yticks(np.round(np.arange(ymin, ymax + 0.1, yticks_gap), 1))
        plt.yticks(np.unique(np.round(plot.get_yticks() / yticks_gap) * yticks_gap))
    return plot


def parse_data(
    summary_key,
    group=None,
    label=None,
    data_file=None,
    groupby_keys=[],
    category_key=None,
    result_file=None,
    transform=None,
):
    if data_file:
        data = pd.read_csv(data_file)
    else:
        files = glob.glob(f"../simulation/{group}/{label}*/result-*.csv")
        print(f"Total files: {len(files)}")
        # print("-", "\n- ".join(files))
        data = pd.concat([pd.read_csv(file) for file in files])
    if transform:
        data = transform(data)

    if not data_file and result_file:
        data.to_csv(f"../result/data/{result_file}.csv", index=None)

    if groupby_keys:
        category_key = category_key or groupby_keys[0]
        # print(data.groupby(groupby_keys)[summary_key].count())
        data_group = data.groupby(groupby_keys)[summary_key].mean()
        data_plot = (
            data_group.unstack(category_key) if len(groupby_keys) > 1 else data_group
        )
    else:
        data_plot = data[[summary_key]]

    return data_plot


def parse_log(
    log_keys, dir_pattern, result_file=None, groupby_keys=[], category_key=None
):
    if not os.path.exists(result_file):
        files = glob.glob(f"{dir_pattern}/*.txt")
        print(f"Total files: {len(files)}")
        header = True
        log_keys = log_keys or []
        pattern = r"  \|  Success (\d+)/(\d+)"
        pattern = ",".join([f"{key}=([^,\s]+?)" for key in log_keys]) + pattern
        for path in files:
            with open(path, "r") as file:
                lines = file.readlines()
                results = []
                success = 0
                tries = 0
                for line in lines:
                    match = re.search(pattern, line)
                    if match:
                        _success = int(match.group(len(log_keys) + 1) or "0")
                        _tries = int(match.group(len(log_keys) + 2) or "0")
                        if _success < success or _tries < tries:
                            print(f"Error on file {path} at line {line}")
                        results.append(
                            {
                                **{
                                    log_keys[i]: match.group(i + 1)
                                    for i in range(len(log_keys))
                                },
                                "success": _success - success,
                                "tries": _tries - tries,
                            }
                        )
                        success, tries = _success, _tries
                pd.DataFrame(results).to_csv(
                    result_file, index=False, header=header, mode="a"
                )
                header = False
    data = pd.read_csv(result_file)
    SUCCESS_KEY = "success"
    TRIES_KEY = "tries"
    groupby_keys = groupby_keys or log_keys
    if groupby_keys:
        category_key = category_key or groupby_keys[0]
        success = data.groupby(groupby_keys)[SUCCESS_KEY].sum()
        tries = data.groupby(groupby_keys)[TRIES_KEY].sum()
        rate = success / tries
        return rate.unstack(category_key) if len(groupby_keys) > 1 else rate
    else:
        return data[[SUCCESS_KEY]] / data[[TRIES_KEY]]


def histogram(
    data, width, cumulative=True, grid=False, precision=10, zero_indicator=True
):
    _, b = np.histogram(data, density=cumulative)
    l, r = (np.trunc(b[0] * precision) - 1) / precision, (
        np.trunc(b[-1] * precision) + 1
    ) / precision
    bins = np.round(np.arange(l, r, width) / width) * width
    print(f"min: {l}, max: {r}, bins: {bins}")
    data.hist(bins=bins, density=cumulative, grid=grid, cumulative=cumulative)
    if zero_indicator:
        plt.axvline(0, color="white", linewidth=1)
    return bins


def annotate(xlabel=None, ylabel=None, xlim=None, ylim=None):
    if xlabel:
        plt.xlabel(xlabel)
    if ylabel:
        plt.ylabel(ylabel)
    if xlim:
        plt.xlim(xlim)
    if ylim:
        plt.ylim(ylim)


def draw(
    data,
    bins_width=0.05,
    grid=False,
    cumulative=False,
    xlabel=None,
    ylabel=None,
    xlim=None,
):
    ylabel = ylabel or r"$\text{Empirical CDF}$"
    print(data.describe())
    bins = histogram(data, width=bins_width, grid=grid, cumulative=cumulative)
    xlim = xlim or [bins[0], bins[-1]]
    annotate(
        xlabel=xlabel,
        ylabel=ylabel,
        xlim=xlim,
        # ylim=[0.0, 1.0]
    )
    plt.figure()
    ecdf = plt.ecdf(data)
    if xlim[0] < 0:
        plt.axvline(x=0, color="red", linestyle="--", linewidth=0.5)
    annotate(xlabel=xlabel, ylabel=ylabel, xlim=xlim, ylim=[0.0, 1.0])


MARKERS = "ovsdX"


def ecdfs(data, columns=[], labels=[], xlabel=None, xlim=None, legend_title=None):
    if columns:
        data = data[columns]
    for i, d in enumerate(data):
        plt.ecdf(
            data[d],
            marker=MARKERS[i],
            markevery=0.1,
            label=labels[i],
        )

    annotate(xlabel=xlabel, ylabel=r"$\text{Empirical CDF}$", xlim=xlim, ylim=None)
    if len(columns) > 1 or len(data) > 1:
        plt.legend(title=legend_title or "")


def ecdfs_group(
    data: pd.DataFrame,
    group_column,
    summary_column,
    values=None,
    labels=None,
    xlabel=None,
    xlim=None,
    legend_title=None,
):
    values = values or data[group_column].unique()
    print(values)
    for i, v in enumerate(values):
        d = data[data[group_column] == v][summary_column]
        print(d.describe())
        plt.ecdf(
            d,
            marker=MARKERS[i % len(MARKERS)],
            markevery=0.1,
            label=v if not labels else labels[i],
        )

    annotate(xlabel=xlabel, ylabel=r"$\text{Empirical CDF}$", xlim=xlim, ylim=None)
    if len(values) > 1 or len(data) > 1:
        plt.legend(title=legend_title or "")
