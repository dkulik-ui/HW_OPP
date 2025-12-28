import * as readline from "node:readline";
import { runControlWorkOne } from "./controlWork/cw1";
import { runModuleWorkOne } from "./moduleWork/module1";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nChoose work to run:");
console.log("1 — Control Work 1");
console.log("2 — Module Work 1");

rl.question("\nEnter number: ", answer => {
    switch (answer.trim()) {
        case "1":
            runControlWorkOne();
            break;
        case "2":
            runModuleWorkOne();
            break;
        default:
            console.log("No such work");
    }
    rl.close();
});