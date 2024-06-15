#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("============================================================");
console.log(chalk.green("\t\n<<<<<...Welcome to the Izhar's Personality Quiz...>>>>>\t\n"));
console.log("============================================================");
class Person {
    _personality;
    constructor() {
        this._personality = "Mystery";
    }
    // user input
    userInput(input) {
        // if else statement
        if (input.includes("talk to other people about yourself openly")) {
            this._personality = chalk.gray.bold.italic("Extrovert");
        }
        else if (input.includes("Keep your words to yourself")) {
            this._personality = chalk.red.bold.italic("Introvert");
        }
    }
    // return function
    get personality() {
        return this._personality;
    }
}
// creat object
class Main {
    async main() {
        // await caaled out
        const ans = await inquirer.prompt([
            {
                type: "list",
                name: "choices",
                message: chalk.yellow("Tell your behaviour"),
                choices: [
                    " 1: talk to other people about yourself openly",
                    " 2: Keep your words to yourself",
                ],
            },
        ]);
        // creat a personal classs
        let myPerson = new Person();
        myPerson.userInput(ans.choices);
        // output responce
        console.log(` You are now : ${myPerson.personality}`);
    }
}
const myObject = new Main();
myObject.main();
