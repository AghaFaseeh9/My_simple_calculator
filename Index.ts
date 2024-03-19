#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your firstNumber", type: "number", name: "firstNumber" },
  { message: "Enter your secondNumber", type: "number", name: "secondNumber" },
  {
    message: "Select any one of the following opertor:",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponential",
    ],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "Exponential") {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log("Ooops!There is a problem");
}
