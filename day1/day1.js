"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var filePath = (0, node_path_1.resolve)(__dirname, "elfs.txt");
var file = (0, node_fs_1.readFileSync)(filePath, "utf8");
var unparsedValues = file.split(/\n\s*\n/);
var elfsArray = unparsedValues.map(function (item) { return item.split("\n"); });
var sum = function (arr) {
    return arr.reduce(function (prev, curr) {
        return Number(prev) + Number(curr);
    }, 0);
};
var sumAllItensInAnArrayOfArrays = function (arr) {
    var tot = arr.map(function (item) {
        return sum(item);
    });
    return tot;
};
var totalForEachElf = sumAllItensInAnArrayOfArrays(elfsArray);
//RESPONSE PT 1
var sortedValuesForEachElf = totalForEachElf.sort(function (a, b) { return a - b; });
var response1 = sortedValuesForEachElf[sortedValuesForEachElf.length - 1]; //RESPONSE1
// PT2
var lastThreeElfs = sortedValuesForEachElf.slice(sortedValuesForEachElf.length - 3, sortedValuesForEachElf.length);
console.log(sum(lastThreeElfs));
