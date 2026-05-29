import { taskOne } from "./level3/task1/task1";
import { taskTwo } from "./level3/task2/task2";
import { taskThree } from "./level3/task3/task3";
import { taskFour } from "./level3/task4/task4";

const level3Tasks = [taskOne, taskTwo, taskThree, taskFour];

export function runModuleWorkTwo(): void {
    console.log("МКР Рівень 3");
    level3Tasks.forEach((task) => {
        task();
    });
}
