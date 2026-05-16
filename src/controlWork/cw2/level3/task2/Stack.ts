// Task 2 Створити шаблонний клас СТЕК
// Параметризувати стек рядками символів, знайти найдовший рядок
// Методи: push (занесення), pop (читання), peek, isEmpty, size, display

export class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this.isEmpty()) {
            console.log("Стек порожній");
            return undefined;
        }
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    getAll(): T[] {
        return [...this.items];
    }

    display(): void {
        if (this.isEmpty()) {
            console.log("[порожній стек...]");
            return;
        }

        console.log("Стек:");
        for (let i = this.items.length - 1; i >= 0; i--) {
            const marker = i === this.items.length - 1 ? " - top" : "";
            console.log(`${this.items[i]}${marker}`);
        }
    }
}
