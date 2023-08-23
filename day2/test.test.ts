/**
 * The function evalInput takes a string argument and returns a corresponding value based on the input.
 * @param arg - The parameter `arg` is a string that represents a specific input value.
 * @returns The function `evalInput` returns a string value based on the input argument. If the
 * argument is "A", it returns "rock". If the argument is "B", it returns "paper". If the argument is
 * "C", it returns "scissors". If the argument is "X", it returns "rock". If the argument is "Y", it
 * returns "paper". If the argument
 */
function evalInput(arg) {
  switch (arg) {
    case "A":
      return "rock";
    case "B":
      return "paper";
    case "C":
      return "scissors";

    case "X":
      return "rock";
    case "Y":
      return "paper";
    case "Z":
      return "scissors";
    default:
      break;
  }
}

/**
 * The function "jokenpo" determines the outcome of a rock-paper-scissors game between two players.
 * @param opponent - The opponent parameter represents the choice made by the opponent in a game of
 * rock-paper-scissors.
 * @param mine - The "mine" parameter represents the choice made by the player. It can be one of three
 * options: "rock", "paper", or "scissors".
 * @returns The function `jokenpo` returns an array with two elements. The first element is a string
 * representing the choice made by the player (`mine`), and the second element is a string indicating
 * the result of the game ("win", "lose", or "draw").
 */
function jokenpo(opponent, mine) {
  if (mine === opponent) return [`${mine}`, "draw"];

  if (mine == "rock" && opponent == "scissors") return [`${mine}`, "win"];
  if (mine == "scissors" && opponent == "rock") return [`${mine}`, "lose"];

  if (mine == "scissors" && opponent == "paper") return [`${mine}`, "win"];
  if (mine == "paper" && opponent == "scissors") return [`${mine}`, "lose"];

  if (mine == "paper" && opponent == "rock") return [`${mine}`, "win"];
  if (mine == "rock" && opponent == "paper") return [`${mine}`, "lose"];
}

/* The code block `describe("jokenpo", () => { ... })` is a test suite that contains multiple test
cases for the `jokenpo` function. Each `it` block represents a specific test case with an expected
outcome. The purpose of this test suite is to verify that the `jokenpo` function correctly
determines the outcome of a rock-paper-scissors game between two players. */
describe("jokenpo", () => {
    it("should return the correct result for rock vs scissors", () => {
      expect(jokenpo("scissors","rock", )).toEqual(["rock", "win"]);
    });
  
    it("should return the correct result for scissors vs rock", () => {
      expect(jokenpo("rock", "scissors" )).toEqual(["scissors", "lose"]);
    });
  
    it("should return the correct result for scissors vs paper", () => {
      expect(jokenpo("paper","scissors")).toEqual(["scissors", "win"]);
    });
  
    it("should return the correct result for paper vs scissors", () => {
      expect(jokenpo("scissors","paper" )).toEqual(["paper", "lose"]);
    });
  
    it("should return the correct result for paper vs rock", () => {
      expect(jokenpo("rock","paper" )).toEqual(["paper", "win"]);
    });
  
    it("should return the correct result for rock vs paper", () => {
      expect(jokenpo("paper","rock")).toEqual(["rock", "lose"]);
    });
  });
  
  /* The code block `describe("evalInput", () => { ... })` is a test suite that contains multiple test
  cases for the `evalInput` function. Each `it` block represents a specific test case with an
  expected outcome. The purpose of this test suite is to verify that the `evalInput` function
  correctly returns the corresponding value based on the input argument. */
  describe("evalInput", () => {
    it("should return the correct shape for input 'A'", () => {
      expect(evalInput("A")).toBe("rock");
    });
  
    it("should return the correct shape for input 'B'", () => {
      expect(evalInput("B")).toBe("paper");
    });
  
    it("should return the correct shape for input 'C'", () => {
      expect(evalInput("C")).toBe("scissors");
    });
  
    it("should return the correct shape for input 'X'", () => {
      expect(evalInput("X")).toBe("rock");
    });
  
    it("should return the correct shape for input 'Y'", () => {
      expect(evalInput("Y")).toBe("paper");
    });
  
    it("should return the correct shape for input 'Z'", () => {
      expect(evalInput("Z")).toBe("scissors");
    });
  });

  // describe("resolve", () => {
  //   it("should calculate the sum correctly", () => {
  //     const arr = ["A X", "B Y", "C Z"];
  //     resolve(arr);
  //     expect(sum).toBe(18);
  //   });
  // });
  

  