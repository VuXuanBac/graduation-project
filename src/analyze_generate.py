from analyze import concat_runs, review

prefix = input("Prefix? ")
reconcat = input("Reconcat? [1: true, 0: false] ")
if reconcat == "1":
    output_file = concat_runs(
        template=f"./simulation/generate/{prefix}cp2-*/*",
        output_dir=f"./simulation/generate/{prefix}-summary",
        output_file=None,
        log_cucumlative=True,
    )
else:
    output_file = input("output_file: ")

review(output_file, ["Dpp", "Dps", "Dsp", "Dss", "Dse", "Dsf", "Dpe", "Dpf"], bins=70)
