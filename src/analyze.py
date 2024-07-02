import pandas as pd
import numpy as np
import os
import glob
import shutil
import re


def concat_runs(template, output_dir, output_file, log_cucumlative=False):
    print(f"===> copying all file with template [{template}] to [{output_dir}]...")
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    for file in glob.glob(template):
        print(file)
        try:
            shutil.copy(file, output_dir)
        except shutil.SameFileError as ex:
            continue

    print(f"===> concat data in [{output_dir}]...")
    results = []
    for file in glob.glob(f"{output_dir}/result-*.csv"):
        data = pd.read_csv(file)
        print(f"- {file}: {len(data)}")
        results.append(data)
    output_file = os.path.join(output_dir, output_file or "main.csv")
    pd.concat(results).to_csv(output_file, index=None)

    print(f"===> concat logs in [{output_dir}]...")
    success, tries = 0, 0
    for path in glob.glob(f"{output_dir}/*.txt"):
        with open(path, "r") as file:
            lines = file.readlines()
            if not log_cucumlative:
                for line in lines:
                    match = re.search(r"Success (\d+)\/(\d+)", line)
                    if match:
                        success += int(match.group(1))
                        tries += int(match.group(2))
            else:
                match = re.search(
                    r"success: (\d+), fail: (\d+), total_tries: (\d+)", lines[-1]
                )
                if match:
                    success += int(match.group(1))
                    tries += int(match.group(3))
                else:
                    match = re.search(r"Success (\d+)\/(\d+)", lines[-1])
                    if match:
                        success += int(match.group(1))
                        tries += int(match.group(2))

    print(
        f"[ LOG]: success {success}, tries {tries}, rate {success / tries * 100:0.2f}%"
    )
    with open(output_file, "r") as file:
        print(f"[REAL]: success {len(file.readlines()) - 1}")
    return output_file


def review(file, keys: list, bins):
    data = pd.read_csv(file)
    # Histogram
    for key in keys:
        data[key] = np.where(data[key] < -10, -10, data[key])
        data.hist(key, bins=bins, cumulative=False)
    # Describe
    print(data[keys].describe())
    return data
