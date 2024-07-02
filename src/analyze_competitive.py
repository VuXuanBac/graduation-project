from analyze import concat_runs, review

reconcat = input("Reconcat? [1: true, 0: false] ")
if reconcat == "1":
    output_file = concat_runs(
        template="./simulation/competitive/thetas*-*/*",
        output_dir="./simulation/competitive/thetas",
        output_file=None,
        log_cucumlative=True,
    )
else:
    output_file = input("output_file: ")

review(output_file, ["BP3.RLP", "BP3.RLS"], bins=70)
