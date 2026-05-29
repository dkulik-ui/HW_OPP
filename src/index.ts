import * as readline from "node:readline";
import { runControlWorkOne } from "./controlWork/cw1";
import { runModuleWorkOne } from "./moduleWork/module1";
import { runControlWorkTwo } from "./controlWork/cw2";
import { runModuleWorkTwo } from "./moduleWork/module2";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nChoose work to run:");
console.log("1 — Control Work 1");
console.log("2 — Module Work 1");
console.log("3 — Control Work 2");
console.log("4 — Module Work 2");

rl.question("\nEnter number: ", answer => {
    switch (answer.trim()) {
        case "1":
            runControlWorkOne();
            break;
        case "2":
            runModuleWorkOne();
            break;
        case "3":
            runControlWorkTwo();
            break;
        case "4":
            runModuleWorkTwo();
            break;
        default:
            console.log("No such work");
    }
    rl.close();
});
