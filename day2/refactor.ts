import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve(__dirname, "input.txt");
const file = readFileSync(filePath, "utf-8");

const unparsedValues = file.trim().split("\n");

const start = performance.now();

const moveScores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const gameScores = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
};


let sum = 0;
unparsedValues.forEach((item) => {
  const [opponentsShape, mineShape] = item.split(" "); 

  const gameScore = gameScores[opponentsShape][mineShape] 

  const shapeScore = moveScores[mineShape]; 


  const totalPointsOfTheMatch = gameScore + shapeScore;

  sum += totalPointsOfTheMatch;
});

console.log(['tot ' + `${sum}` , "time", performance.now() - start])
