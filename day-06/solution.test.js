const { parse, solve } = require("./solution");

const input = ``;

describe("day 5", () => {
  describe("part 1", () => {
    it("is 5", () => {
      const { part1 } = solve("bvwbjplbgvbhsrlpgdmjqwftvncz");

      expect(part1).toBe(5);
    });
  });

  describe("part 2", () => {
    it("is 23", () => {
      const { part2 } = solve("bvwbjplbgvbhsrlpgdmjqwftvncz");

      expect(part2).toBe(23);
    });
  });
});
