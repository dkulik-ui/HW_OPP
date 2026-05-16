// Task 1 Створити параметризований однонаправлений лінійний кільцевий список
// Тип елемента визначається параметром шаблону (generic <T>)
// Операції: додавання, видалення, виведення, підрахунок кількості

class CircularNode<T> {
    public next: CircularNode<T> | null = null;
    constructor(public data: T) {}
}

export class CircularList<T> {
    private tail: CircularNode<T> | null = null;
    private count: number = 0;

    add(value: T): void {
        const newNode = new CircularNode(value);

        if (!this.tail) {
            newNode.next = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.count++;
    }

    remove(value: T): boolean {
        if (!this.tail) return false;

        const head = this.tail.next!;

        if (this.count === 1 && head.data === value) {
            this.tail = null;
            this.count = 0;
            return true;
        }

        let prev = this.tail;
        let current = head;

        for (let i = 0; i < this.count; i++) {
            if (current.data === value) {
                prev.next = current.next;
                if (current === this.tail) {
                    this.tail = prev;
                }
                this.count--;
                return true;
            }
            prev = current;
            current = current.next!;
        }

        return false;
    }

    display(): void {
        if (!this.tail) {
            console.log("Список порожній");
            return;
        }

        const head = this.tail.next!;
        let current = head;
        const items: string[] = [];

        for (let i = 0; i < this.count; i++) {
            items.push(String(current.data));
            current = current.next!;
        }

        console.log(items.join(", "));
    }

    size(): number {
        return this.count;
    }

    toArray(): T[] {
        if (!this.tail) return [];

        const result: T[] = [];
        let current = this.tail.next!;

        for (let i = 0; i < this.count; i++) {
            result.push(current.data);
            current = current.next!;
        }

        return result;
    }
}
