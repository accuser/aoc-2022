const { solve } = require("./solution");

const input = `A Y\nB X\nC Z`;

describe("day 2", () => {
  describe("part 1", () => {
    it("is 15", () => {
      const { part1 } = solve(input);

      expect(part1).toBe(15);
    });
  });

  describe("part 2", () => {
    it("is 12", () => {
      const { part2 } = solve(input);

      expect(part2).toBe(12);
    });
  });
});
