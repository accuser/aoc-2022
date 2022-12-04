const { parse, solve } = require("./solution");

const input = `2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8\n`;

describe("day 4", () => {
  describe("part 1", () => {
    it("is 2", () => {
      const { part1 } = solve(input);

      expect(part1).toBe(2);
    });
  });

  describe("part 2", () => {
    it("is 4", () => {
      const { part2 } = solve(input);

      expect(part2).toBe(4);
    });
  });
});
