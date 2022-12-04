const solve = (input) => {
  const values = transform(input);

  const part1 = values.filter(
    ([a, b, c, d]) => (a >= c && b <= d) || (c >= a && d <= b)
  ).length;

  const part2 = values.filter(([a, b, c, d]) => a <= d && b >= c).length;

  return { part1, part2 };
};

const transform = (input) =>
  input.split(/\n/).map((line) =>
    line
      .split(",")
      .map((range) => range.split("-").map((value) => Number(value)))
      .flat()
  );

module.exports = { solve };
