const { parse, solve } = require("./solution");

const input = `$ cd /\n$ ls\ndir a\n14848514 b.txt\n8504156 c.dat\ndir d\n$ cd a\n$ ls\ndir e\n29116 f\n2557 g\n62596 h.lst\n$ cd e\n$ ls\n584 i\n$ cd ..\n$ cd ..\n$ cd d\n$ ls\n4060174 j\n8033020 d.log\n5626152 d.ext\n7214296 k`;

describe("day 7", () => {
  describe("part 1", () => {
    it("is 95437", () => {
      const { part1 } = solve(input);

      expect(part1).toBe(95437);
    });
  });

  describe("part 2", () => {
    it("is 24933642", () => {
      const { part2 } = solve(input);

      expect(part2).toBe(24933642);
    });
  });
});
