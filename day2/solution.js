"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var filePath = (0, node_path_1.resolve)(__dirname, "input.txt");
var file = (0, node_fs_1.readFileSync)(filePath, "utf-8");
var unparsedValues = file.split(/\n\s*/);
var shapeValues = {
    'rock': 1,
    'paper': 2,
    'scissors': 3,
};
var scores = {
    'lose': 0,
    'draw': 3,
    'win': 6,
};
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
function jokenpo(mine, opponent) {
    if (mine === opponent)
        return "".concat(mine, " draw");
    if (mine == 'rock' && opponent == 'scissors')
        return "".concat(mine, " win");
    if (mine == 'scissors' && opponent == 'rock')
        return "".concat(mine, " lose");
    if (mine == 'scissors' && opponent == 'paper')
        return "".concat(mine, " win");
    if (mine == 'paper' && opponent == 'scissors')
        return "".concat(mine, " lose");
    if (mine == 'paper' && opponent == 'rock')
        return "".concat(mine, " win");
    if (mine == 'rock' && opponent == 'paper')
        return "".concat(mine, " lose");
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
function resolveMatch(arr) {
    return arr.map(function (item) {
        var splitedItem = item.split(" ");
        var mineShape = evalInput(splitedItem[0]);
        var opponentsShape = evalInput(splitedItem[1]);
        return jokenpo(mineShape, opponentsShape);
    });
}
var matchResolved = resolveMatch(unparsedValues);
var result = matchResolved.map(function (prev) {
    var array = prev.split(' ');
    var shapeUsed = array[0];
    var matchResult = array[1];
    var tot = scores[matchResult] + shapeValues[shapeUsed];
    return tot;
});
var totalResult = result.reduce(function (prev, curr) {
    console.log(prev);
    console.log(curr);
    return prev + curr;
}, 0);
//console.log(totalResult)
function calculateScore(strategyGuide) {
    var rules = {
        'A': 'X',
        'B': 'Y',
        'C': 'Z', // Scissors beats Paper
    };
    var totalScore = 0;
    for (var _i = 0, strategyGuide_1 = strategyGuide; _i < strategyGuide_1.length; _i++) {
        var round = strategyGuide_1[_i];
        var opponentChoice = round[0];
        var yourChoice = rules[opponentChoice];
        var outcome = round[1];
        var roundScore = 0;
        if (yourChoice === outcome) {
            roundScore = 6; // You win
        }
        else if (opponentChoice === yourChoice) {
            roundScore = 3; // Draw
        }
        totalScore += roundScore;
    }
    return totalScore;
}
var totalScore = calculateScore(unparsedValues);
console.log('Total Score:', totalScore);
