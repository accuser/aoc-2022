const solve = (input) => {
  const [start, instructions] = transform(input);

  const stacks = start
    .reverse()
    .splice(0, 1)[0]
    .split(" ")
    .filter(Boolean)
    .reduce((prev) => [...prev, []], []);

  start.forEach((line) => {
    line.match(/\[[A-Z]\]|\s{3}\s?/g).forEach((crate, index) => {
      if (crate.trim()) {
        stacks[index].push(crate);
      }
    });
  });

  const stack1 = JSON.parse(JSON.stringify(stacks));

  instructions.forEach((instruction) => {
    const [count, from, to] = instruction.match(/\d+/g);

    for (let i = 0; i < count; i++) {
      stack1[to - 1].push(stack1[from - 1].pop());
    }
  });

  const stack2 = JSON.parse(JSON.stringify(stacks));

  instructions.forEach((line) => {
    const [count, from, to] = line.match(/\d+/g);

    const crates = [];

    for (let i = 0; i < count; i++) {
      crates.push(stack2[from - 1].pop());
    }

    for (let i = 0; i < count; i++) {
      stack2[to - 1].push(crates.pop());
    }
  });

  const part1 = stack1.map((stack) => stack.at(-1)[1] ?? " ").join("");
  const part2 = stack2.map((stack) => stack.at(-1)[1] ?? " ").join("");

  return { part1, part2 };
};

const transform = (input) =>
  input.split(/\n\n/).map((lines) => lines.split(/\n/).filter(Boolean));

module.exports = { solve };
