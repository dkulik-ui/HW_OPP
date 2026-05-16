// Task 3 Створити абстрактний базовий клас з віртуальною функцією - корені рівняння
// Похідні класи: лінійне і квадратне рівняння

export abstract class Equation {
    abstract solve(): number[];
    abstract toString(): string;

    printRoots(): void {
        const roots = this.solve();
        if (roots.length === 0) {
            console.log(`${this.toString()} - дійсних коренів немає`);
        } else {
            const formatted = roots.map(r => r.toFixed(2)).join(", ");
            console.log(`${this.toString()} - корені: ${formatted}`);
        }
    }
}
