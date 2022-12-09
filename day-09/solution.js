const delta = (d) => [
  d === "R" ? 1 : d === "L" ? -1 : 0,
  d === "D" ? 1 : d === "U" ? -1 : 0,
];

const simulate = (movements, length) => {
  const rope = Array.from({ length }, () => ({ x: 0, y: 0 }));

  positions = new Set();

  movements.forEach((m) => {
    m.split("").forEach((d) => {
      const mx = d === "R" ? 1 : d === "L" ? -1 : 0;
      const my = d === "D" ? 1 : d === "U" ? -1 : 0;

      rope.forEach(({ x, y }, i) => {
        if (i === 0) {
          rope[0].x += mx;
          rope[0].y += my;
        } else {
          const dx = rope[i - 1].x - x;
          const dy = rope[i - 1].y - y;

          if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) {
            // noop
          } else if (Math.abs(dx) === 2 && dy === 0) {
            rope[i].x += Math.sign(dx);
          } else if (Math.abs(dx) === 2) {
            rope[i].x += Math.sign(dx);
            rope[i].y += Math.sign(dy);
          } else if (Math.abs(dy) === 2 && dx === 0) {
            rope[i].y += Math.sign(dy);
          } else if (Math.abs(dy) === 2) {
            rope[i].x += Math.sign(dx);
            rope[i].y += Math.sign(dy);
          }
        }
      });

      positions.add(`${rope.at(-1).x},${rope.at(-1).y}`);
    });
  });

  return positions.size;
};

const solve = (input) => {
  const lines = transform(input);

  const part1 = simulate(lines, 2);

  const part2 = simulate(lines, 10);

  return { part1, part2 };
};

const transform = (input) =>
  input.split(/\n/).map((line) => {
    [d, s] = line.split(" ");
    return d.repeat(s);
  });

module.exports = { solve };
