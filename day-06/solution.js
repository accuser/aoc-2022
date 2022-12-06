const solve = (input) => {
  const values = transform(input);

  const part1 = values.findIndex(
    (_, i, a) => new Set(a.slice(i - 4, i)).size === 4
  );

  const part2 = values.findIndex(
    (_, i, a) => new Set(a.slice(i - 14, i)).size === 14
  );

  return { part1, part2 };
};

const transform = (input) => input.split("");

module.exports = { solve };
