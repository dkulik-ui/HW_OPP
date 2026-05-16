import { Stack } from "./Stack";

const findLongestString = (stack: Stack<string>): string => {
    const all = stack.getAll();
    if (all.length === 0) return "";
    return all.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
}

export const taskTwo = (): void => {
    console.log("Завдання 2: Шаблонний клас СТЕК");

    const stringStack = new Stack<string>();
    stringStack.push("привіт");
    stringStack.push("Об'єктно-орієнтоване програмування");
    stringStack.push("TypeScript");
    stringStack.push("стек");
    stringStack.push("модульна контрольна робота");

    console.log("\n")
    stringStack.display();

    const longest = findLongestString(stringStack);
    console.log(`Найдовший рядок у стеку: "${longest}" (${longest.length} символів)`);

    console.log("\n")
    console.log("Читаємо зі стеку:");
    while (!stringStack.isEmpty()) {
        console.log(`"${stringStack.pop()}"`);
    }

    console.log("\n")
    console.log("Стек чисел:");
    const numStack = new Stack<number>();
    numStack.push(42);
    numStack.push(17);
    numStack.push(99);
    numStack.display();
    console.log(`Найбільше: ${numStack.peek()}`);
}
