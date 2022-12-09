const reverse = (a, b) => b - a;
const sum = (a, b) => Number(a) + Number(b);

const solve = (input) => {
  const values = transform(input);

  const part1 = values.slice(0, 1).reduce(sum);

  const part2 = values.slice(0, 3).reduce(sum);

  return { part1, part2 };
};

const transform = (input) =>
  input
    .split(/\n\n/)
    .map((lines) => lines.split(/\n/).reduce(sum))
    .sort(reverse);

module.exports = { solve };
