import { Figure } from "./Figure";
import { Triangle } from "./Triangle";
import { Quadrilateral } from "./Quadrilateral";
import { Polygon } from "./Polygon";

export const taskOne = (): void => {
    console.log("Завдання 1:");

    // Масив вказівників на абстрактний клас
    const figures: Figure[] = [
        new Triangle(0, 0, 3, 4, 5),
        new Quadrilateral(10, 10, 6, 4),
        new Polygon(5, 5, 6, 3),
    ];

    // Виклик віртуальних функцій через вказівники на базовий клас
    console.log("\nЗображення фігур:");
    for (const fig of figures) {
        fig.draw();
    }

    // Повороти
    console.log("\nПоворот кожної фігури:");
    figures[0].rotate(45);
    figures[1].rotate(90);
    figures[2].rotate(60);

    // Переміщення
    console.log("\nПереміщення:");
    figures[0].move(5, 3);
    figures[1].move(-2, 7);

    // Після трансформацій
    console.log("\nФігури після трансформацій:");
    for (const fig of figures) {
        fig.draw();
    }

    // Приховування фігур (віртуальна функція hide)
    console.log("\nПриховування фігур:");
    for (const fig of figures) {
        fig.hide();
    }
}
