const priority = (c) => c.charCodeAt(0) - (/[a-z]/.test(c) ? 96 : 38);

const sum = (p, c) => p + c;

const solve = (input) => {
  const values = transform(input);

  const part1 = values
    .map((line) => [
      line.slice(0, line.length / 2),
      line.slice(line.length / 2),
    ])
    .map(([first, second]) => first.split("").find((c) => second.includes(c)))
    .map(priority)
    .reduce(sum);

  const part2 = values
    .reduce(
      ([acc, arr], c, i) =>
        i % 3 === 2 ? [[], [...arr, [...acc, c]]] : [[...acc, c], arr],
      [[], []]
    )[1]
    .map(([first, second, third]) =>
      first.split("").find((c) => second.includes(c) && third.includes(c))
    )
    .map(priority)
    .reduce(sum);

  return { part1, part2 };
};

const transform = (input) => input.split(/\n/);

module.exports = { solve };
