const solve = (input) => {
  const values = transform(input);

  // Part 1 - maximum value
  const part1 = values[0];

  // Part 2 - sum of top three values
  const part2 = values[0] + values[1] + values[2];

  return { part1, part2 };
};

const transform = (input) =>
  input
    .split(/\n/)
    .reduce(
      ([acc, arr], cur) =>
        cur ? [acc + Number(cur), arr] : [0, [...arr, acc]],
      [0, []]
    )[1]
    .sort((a, b) => b - a);

module.exports = { solve };
