const { solve } = require("./solution");

describe("day 9", () => {
  describe("part 1", () => {
    it("is 13", () => {
      const { part1 } = solve(`R 4\nU 4\nL 3\nD 1\nR 4\nD 1\nL 5\nR 2`);

      expect(part1).toBe(13);
    });
  });

  describe("part 2", () => {
    it("is 36", () => {
      const { part2 } = solve(`R 5\nU 8\nL 8\nD 3\nR 17\nD 10\nL 25\nU 20`);

      expect(part2).toBe(36);
    });
  });
});
