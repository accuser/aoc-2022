const sum = (a, b) => Number(a) + Number(b);

const score = (a, b) => {
  switch (a - b) {
    case 0:
      return 3;
    case -1:
    case 2:
      return 6;
    default:
      return 0;
  }
};

const cheat = (a, b) => {
  switch (b) {
    case 1:
      return [, 3, 1, 2].at(a);
    case 2:
      return a;
    case 3:
      return [, 2, 3, 1].at(a);
  }
};

const solve = (input) => {
  const values = transform(input);

  const part1 = values.map(([a, b]) => b + score(a, b)).reduce(sum);

  const part2 = values
    .map(([a, b]) => cheat(a, b) + score(a, cheat(a, b)))
    .reduce(sum);

  return { part1, part2 };
};

const transform = (input) =>
  input
    .split(/\n/)
    .map((line) => line.split(" "))
    .map(([a, b]) => [
      [, "A", "B", "C"].indexOf(a),
      [, "X", "Y", "Z"].indexOf(b),
    ]);

module.exports = { solve };
