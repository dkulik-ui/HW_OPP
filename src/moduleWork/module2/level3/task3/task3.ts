import { DynamicArray2D } from "./DynamicArray2D";

export const taskThree = (): void => {
    console.log("Завдання 3:");

    // Створення числового масиву 3x4
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const arr = DynamicArray2D.fromInput(3, 4, values);

    console.log("\nОригінальний масив (числовий 3x4):");
    arr.print();

    // Копіювання за рядками
    console.log("\nКопія за рядками:");
    const rowCopy = arr.copyByRows();
    rowCopy.print();

    // Копіювання за стовпцями
    console.log("\nКопія за стовпцями:");
    const colCopy = arr.copyByCols();
    colCopy.print();

    // Копіювання рядка
    console.log(`\nКопія рядка 1: [${arr.copyRow(1).join(", ")}]`);

    // Копіювання стовпчика
    console.log(`Копія стовпця 2: [${arr.copyCol(2).join(", ")}]`);

    // Копіювання головної діагоналі
    console.log(`Головна діагональ: [${arr.copyMainDiagonal().join(", ")}]`);

    // Рядковий масив
    console.log("\nРядковий масив 2x3:");
    const strArr = DynamicArray2D.fromInput(2, 3, ["a", "b", "c", "d", "e", "f"]);
    strArr.print();
    console.log(`Діагональ: [${strArr.copyMainDiagonal().join(", ")}]`);
    console.log(`Стовпець 0: [${strArr.copyCol(0).join(", ")}]`);
}
