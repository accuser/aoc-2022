const { solve } = require("./solution");

const input = `1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000\n`;

describe("day 1", () => {
  describe("part 1", () => {
    it("is 24000", () => {
      const { part1 } = solve(input);

      expect(part1).toBe(24000);
    });
  });

  describe("part 2", () => {
    it("is 45000", () => {
      const { part2 } = solve(input);

      expect(part2).toBe(45000);
    });
  });
});
