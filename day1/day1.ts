import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve(__dirname, "elfs.txt");
const file = readFileSync(filePath, "utf8");


const unparsedValues = file.split(/\n\s*\n/);

const elfsArray = unparsedValues.map((item) => item.split("\n"));

const sum = (arr: Array<number | string>) => {
    return arr.reduce((prev, curr) => {
     return Number(prev) + Number(curr);
    }, 0);
  };

const sumAllItensInAnArrayOfArrays = (arr: typeof elfsArray): Array<number> => {
    const tot = arr.map((item) => {
        return sum(item)
    })

    return tot as any
};

const totalForEachElf = sumAllItensInAnArrayOfArrays(elfsArray)

//RESPONSE PT 1
const sortedValuesForEachElf = totalForEachElf.sort((a,b) => a - b )
const response1 = sortedValuesForEachElf[sortedValuesForEachElf.length - 1] //RESPONSE1



// PT2
const lastThreeElfs = sortedValuesForEachElf.slice(sortedValuesForEachElf.length - 3, sortedValuesForEachElf.length)
console.log(sum(lastThreeElfs))
