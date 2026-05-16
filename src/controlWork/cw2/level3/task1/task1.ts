import { CircularList } from "./CircularList";

export const taskOne = (): void => {
    console.log("Завдання 1: Кільцевий список");

    const numbers = new CircularList<number>();
    numbers.add(10);
    numbers.add(20);
    numbers.add(30);
    numbers.add(40);
    numbers.add(50);

    console.log("\n")
    console.log("Числовий список:");
    numbers.display();
    console.log(`Кількість елементів: ${numbers.size()}`);

    console.log("\n")
    console.log("Видаляємо 30:");
    numbers.remove(30);
    numbers.display();
    console.log(`Кількість: ${numbers.size()}`);

    console.log("Видаляємо 10:");
    numbers.remove(10);
    numbers.display();

    console.log("\n")
    console.log("Рядковий список:");
    const fruits = new CircularList<string>();
    fruits.add("яблуко");
    fruits.add("банан");
    fruits.add("вишня");
    fruits.add("диня");
    fruits.display();

    fruits.remove("банан");
    console.log("Після видалення 'банан':");
    fruits.display();
}
