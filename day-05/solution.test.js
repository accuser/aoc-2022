const { parse, solve } = require("./solution");

const input = `    [D]    \n[N] [C]    \n[Z] [M] [P]\n 1   2   3 \n\nmove 1 from 2 to 1\nmove 3 from 1 to 3\nmove 2 from 2 to 1\nmove 1 from 1 to 2\n`;

describe("day 4", () => {
  describe("part 1", () => {
    it("is 'CMZ'", () => {
      const { part1 } = solve(input);

      expect(part1).toBe("CMZ");
    });
  });

  describe("part 2", () => {
    it("is 'MCD'", () => {
      const { part2 } = solve(input);

      expect(part2).toBe("MCD");
    });
  });
});
