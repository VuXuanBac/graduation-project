function capitalizeWords(input) {
  return input.replace(
    /(?<=^|\s+)([a-z])(\S*)/g,
    (_, first, remain) => first.toUpperCase() + remain
  );
}
