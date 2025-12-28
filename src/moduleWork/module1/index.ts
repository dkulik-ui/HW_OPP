import { taskOne } from "./task1/task1";
import { taskTwo } from "./task2/task2";
import { taskThree } from "./task3/task3";
import { taskFour } from "./task4/task4";

export const tasks = [taskOne, taskTwo, taskThree, taskFour];

export function runModuleWorkOne() {
    tasks.forEach((task, index) => {
        console.log('\n-----------------------------------');
        console.log(`Running task ${index + 1}: `);
        task();
    });
}