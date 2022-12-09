const { parse, solve } = require("./solution");

const input = `vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw`;

describe("day 3", () => {
  describe("part 1", () => {
    it("is 157", () => {
      const { part1 } = solve(input);

      expect(part1).toBe(157);
    });
  });

  describe("part 2", () => {
    it("is 70", () => {
      const { part2 } = solve(input);

      expect(part2).toBe(70);
    });
  });
});
