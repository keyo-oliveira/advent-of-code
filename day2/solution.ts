import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve(__dirname, "input.txt");
const file = readFileSync(filePath, "utf-8");

const unparsedValues = file.split(/\n\s*/);

const shapeValues = {
  'rock': 1,
  'paper': 2,
  'scissors': 3,
};

const scores = {
  'lose': 0,
  'draw': 3,
  'win': 6,
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

function jokenpo(mine: string, opponent: string) {
  if (mine === opponent) return `${mine} draw`;

  
  if(mine == 'rock' && opponent == 'scissors')  return `${mine} win`;
  if(mine == 'scissors' && opponent == 'rock')  return `${mine} lose`;
  
  
  if(mine == 'scissors' && opponent == 'paper')  return `${mine} win`;
  if(mine == 'paper' && opponent == 'scissors')  return `${mine} lose`;
  
  
  if(mine == 'paper' && opponent == 'rock')  return `${mine} win`;
  if(mine == 'rock' && opponent == 'paper')  return `${mine} lose`;



  // switch (mine && opponent) {
  //   case "rock" && "scissors":     
  //     return `${mine} win`;
  //   case "rock" && "paper":
  //     return `${mine} lose`;
  //   case "paper" && "scissors":
  //     return `${mine} lose`;

  //   case "scissors" && "rock":
  //     return `${mine} lose`;
  //   case "paper" && "rock":
  //     return `${mine} win`;
  //   case "scissors" && "paper":
  //     return `${mine} win`;
    
  //     default:
  //     break;
  // }
}

function resolveMatch(arr: Array<string>) {
  return arr.map((item) => {
    const splitedItem = item.split(" ");
    const mineShape = evalInput(splitedItem[0]);
    const opponentsShape = evalInput(splitedItem[1]);

    return jokenpo(mineShape, opponentsShape)
  });
}

const matchResolved = resolveMatch(unparsedValues);

const result = matchResolved.map((prev) => {
  const array = prev.split(' ')
  const shapeUsed = array[0]
  const matchResult = array[1]    

  const tot = scores[matchResult] + shapeValues[shapeUsed]  
  

  

  return tot
})

const totalResult = result.reduce((prev, curr) => {   
  console.log(prev)
  console.log(curr)
  return prev+curr
}, 0)

console.log(totalResult)


