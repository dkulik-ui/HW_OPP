import { Counter } from "./Counter";

export const taskTwo = (): void => {
    console.log("Завдання 2:");

    const counter = new Counter(0, 5);
    console.log(`\nСтворено: ${counter}`);

    console.log("\nЗбільшення від 0 до 5 та скидання:");
    for (let i = 0; i < 8; i++) {
        counter.increment();
        console.log(`increment() -> ${counter.getValue()}`);
    }

    console.log(`\nПоточне значення: ${counter.getValue()}`);
    counter.reset();
    console.log(`Після reset(): ${counter.getValue()}`);

    console.log("\nЛічильник з діапазоном [10..15]:");
    const counter2 = new Counter(10, 15);
    for (let i = 0; i < 7; i++) {
        counter2.increment();
        console.log(`  ${counter2}`);
    }

    console.log("\nЗміна діапазону:");
    counter2.setRange(0, 3);
    console.log(`Новий діапазон: ${counter2}`);
    for (let i = 0; i < 5; i++) {
        counter2.increment();
        console.log(`  ${counter2}`);
    }
}
