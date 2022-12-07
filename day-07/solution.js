const path = require("node:path");

const solve = (input) => {
  const lines = transform(input);

  let cwd = "/";

  const files = lines
    .map((line) => {
      const [, dir, size, file] = line.match(/^\$ cd (.+)|(\d+)\s(.+)$/) ?? [];

      if (dir === "/") {
        cwd = dir;
      } else if (dir) {
        cwd = path.resolve(path.join(cwd, dir));
      } else if (size && file) {
        return {
          file: path.join(cwd, file),
          size,
        };
      }
    })
    .filter(Boolean)
    .reduce((p, c) => p.add(JSON.stringify(c)), new Set());

  const sizes = [...files]
    .map((json) => JSON.parse(json))
    .map(({ file, size }) => ({
      dir: path.dirname(file),
      size: +size,
    }))
    .reduce((prev, { dir, size }) => {
      dir
        .split("/")
        .filter(Boolean)
        .reduce((p, c) => [...p, path.join(...p, c)], ["/"])
        .forEach((part) => {
          if (prev[part]) {
            prev[part] = prev[part] + size;
          } else {
            prev[part] = size;
          }
        });

      return prev;
    }, {});

  const part1 = Object.entries(sizes)
    .filter(([k, v]) => v <= 100000)
    .reduce((p, [, size]) => p + size, 0);

  const available = 70_000_000 - sizes["/"];

  const part2 = Object.entries(sizes)
    .filter(([k, v]) => v >= 30_000_000 - available)
    .map(([, size]) => size)
    .sort((a, b) => a - b)[0];

  return { part1, part2 };
};

const transform = (input) => input.split(/\n/);

module.exports = { solve };
