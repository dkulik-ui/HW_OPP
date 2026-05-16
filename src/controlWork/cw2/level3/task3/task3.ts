import { Equation } from "./Equation";
import { LinearEquation } from "./LinearEquation";
import { QuadraticEquation } from "./QuadraticEquation";

export const taskThree = (): void => {
    console.log("Завдання 3: Абстрактний клас рівнянь");

    // Масив вказівників на абстрактний клас (в C++ це Equation* equations[])
    const equations: Equation[] = [
        new LinearEquation(2, -6), // x = 3
        new LinearEquation(5, 15), // x = -3
        new LinearEquation(0, 7), // немає коренів
        new QuadraticEquation(1, -5, 6), // x = 2, 3
        new QuadraticEquation(1, 4, 4), // x = -2
        new QuadraticEquation(2, 1, 3), // немає коренів
    ];

    console.log("\n")
    // Виклик віртуальної функції через вказівник на базовий клас
    for (const eq of equations) {
        eq.printRoots();
    }
}
