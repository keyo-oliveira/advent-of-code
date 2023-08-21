import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve(__dirname, "input.txt");
const file = readFileSync(filePath, "utf-8");

const unparsedValues = file.trim().split("\n");

const start = performance.now();

const shapeValues = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const scores = {
  lose: 0,
  draw: 3,
  win: 6,
};

function evalInput(arg: string) {
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

function jokenpo(opponent: string, mine: string) {
  if (mine === opponent) return [`${mine}`, "draw"];

  if (mine == "rock" && opponent == "scissors") return [`${mine}`, "win"];
  if (mine == "scissors" && opponent == "rock") return [`${mine}`, "lose"];

  if (mine == "scissors" && opponent == "paper") return [`${mine}`, "win"];
  if (mine == "paper" && opponent == "scissors") return [`${mine}`, "lose"];

  if (mine == "paper" && opponent == "rock") return [`${mine}`, "win"];
  if (mine == "rock" && opponent == "paper") return [`${mine}`, "lose"];
}

let sum = 0;

unparsedValues.forEach((item) => {
  const splitedItem = item.split(" ");
  const mineShape = evalInput(splitedItem[0]);
  const opponentsShape = evalInput(splitedItem[1]);

  const resultsOfTheMatch = jokenpo(mineShape, opponentsShape);

  const shapeUsed = resultsOfTheMatch[0];
  const matchResult = resultsOfTheMatch[1];

  const totalPointsOfTheMatch = shapeValues[shapeUsed] + scores[matchResult];

  sum += totalPointsOfTheMatch;
});

console.log(sum);
console.log("time", performance.now() - start);
