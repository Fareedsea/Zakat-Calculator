#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let zakat = 2.5;
let goldValInTola = 234000;
let goldWeightInTolaReq = 7.5;
const answer = await inquirer.prompt({
    name: "goldWeight",
    message: "Enter Gold Weight in Tola :",
    type: "number",
});
let goldWeight = answer.goldWeight;
if (goldWeight >= goldWeightInTolaReq) {
    let calculateZakat = (goldWeight * goldValInTola) * (zakat / 100);
    console.log(chalk.redBright.bgYellow(`The calculated value of gold weighing: ${goldWeight} tola and value of Zakat is Rs. ${calculateZakat} `));
}
else {
    console.log(chalk.white.bgRed("Zakat is not Applicable"));
}
