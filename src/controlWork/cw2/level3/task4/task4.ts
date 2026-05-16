import { FactorialBase } from "./FactorialBase";
import { FactorialArray } from "./FactorialArray";

export const taskFour = (): void => {
    console.log("Завдання 4: Віртуальна функція факторіалу");

    console.log("\n")
    console.log("Віртуальна функція в базовому класі:");
    const base: FactorialBase = new (class extends FactorialBase {
        constructor(n: number) { super(n); }
    })(5);
    console.log(`factorial(${base.getNumber()}) = ${base.factorial()}`);

    console.log("\n")
    console.log("Таблиця факторіалів:");
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12];
    const factArray = new FactorialArray(numbers);
    factArray.printTable();

}
