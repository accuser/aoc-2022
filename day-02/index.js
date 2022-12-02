const fs = require("node:fs/promises");
const path = require("node:path");
const { solve } = require("./solution");

const INPUT = path.join(__dirname, "input.txt");

const main = async () => {
  const input = await fs.readFile(INPUT, "utf-8");

  const solution = solve(input);

  console.table(solution);
};

main();
