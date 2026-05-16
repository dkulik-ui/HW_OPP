// Task 1 Що потрібно передбачити у класі для передавання об'єктів як параметрів функції?
// Потрібен конструктор копіювання (в C++), щоб при передачі за значенням створювалася
// коректна копія. Якщо клас має динамічну пам'ять, потрібне глибоке копіювання
// В TS об'єкти передаються по посиланню, для копії потрібен кастом метод, в моєму випадку clone()
class StudentParam {
    constructor(
        public name: string,
        public grade: number
    ) {}

    clone(): StudentParam {
        return new StudentParam(this.name, this.grade);
    }
}

const upgradeGrade = (student: StudentParam): void => {
    student.grade += 1;
}

const upgradeGradeSafe = (student: StudentParam): StudentParam => {
    const copy = student.clone();
    copy.grade += 1;
    return copy;
}

const exampleObjectAsParam = (): void => {
    console.log("1. Передавання об'єктів як параметрів:");
    const s = new StudentParam("Іван", 3);
    console.log(`До: ${s.name}, курс ${s.grade}`);

    upgradeGrade(s);
    console.log(`Після upgradeGrade: курс ${s.grade}`);

    const copy = upgradeGradeSafe(s);
    console.log(`Оригінал: курс ${s.grade}, копія: курс ${copy.grade}`);
}

// Task 2 У чому відмінність класів-інтерфейсів від абстрактних класів?
// Інтерфейс: містить лише сигнатури методів, не має полів та реалізації, клас може
// реалізувати декілька інтерфейсів.
// Абстрактний клас: може мати поля, часткову реалізацію методів і конструктор,
// але наслідується лише один (в C++, Java, TS)
interface IAnimal {
    name: string;
    makeSound(): string;
    move(): string;
}

abstract class Animal {
    constructor(protected name: string) {}

    describe(): string {
        return `${this.name}: ${this.makeSound()}, ${this.move()}`;
    }

    abstract makeSound(): string;
    abstract move(): string;
}

class Dog extends Animal {
    makeSound(): string { return "Гав!"; }
    move(): string { return "бігає"; }
}

class Fish extends Animal {
    makeSound(): string { return "..."; }
    move(): string { return "плаває"; }
}

const exampleInterfaceVsAbstract = (): void => {
    console.log("\n")
    console.log("2. Інтерфейси vs Абстрактні класи:");
    console.log("Інтерфейс має лише сигнатури, клас може реалізувати декілька");
    console.log("Абстрактний клас може мати реалізацію, наслідується лише один");
    console.log("\n")

    const animals: Animal[] = [new Dog("Рекс"), new Fish("Немо")];
    for (const a of animals) {
        console.log(`${a.describe()}`);
    }
}

// Task 3 Як запрограмувати двовимірний масив на основі класу vector?
// Двовимірний масив - це vector<vector<T>> (вектор векторів). Кожен рядок є окремим
// вектором, що дозволяє динамічно змінювати розмір. В TS аналог - Array<Array<T>>,
// створюється через Array.from(), додавання рядків через push()
const exampleMatrix = (): void => {
    console.log("\n")
    console.log("3. Двовимірний масив (аналог vector<vector<T>>):");

    const rows = 3, cols = 4;
    const matrix: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j + 1;
        }
    }

    for (const row of matrix) {
        console.log(`[${row.join(", ")}]`);
    }

    matrix.push([13, 14, 15, 16]);
    console.log(`Після додавання рядка: ${matrix.length} рядків`);
}

// Task 4 Чим відрізняється алгоритм count_if від find_if?
// find_if шукає перший елемент, що задовольняє умову, і повертає ітератор на нього,
// зупиняючись одразу після знаходження, а count_if - проходить весь контейнер і рахує
// кількість елементів, що задовольняють умову. В TS аналоги: find() та reduce()
const exampleCountIfVsFindIf = (): void => {
    console.log("\n")
    console.log("4. count_if vs find_if:");
    const numbers = [12, 5, 23, 7, 18, 3, 41, 9, 15];

    const firstEven = numbers.find(n => n % 2 === 0);
    console.log(`find_if (парне): ${firstEven}`);

    const evenCount = numbers.reduce((count, n) => count + (n % 2 === 0 ? 1 : 0), 0);
    console.log(`count_if (парні): ${evenCount}`);

    const greaterThan10 = numbers.find(n => n > 10);
    const countGreaterThan10 = numbers.reduce((count, n) => count + (n > 10 ? 1 : 0), 0);
    console.log(`Перший > 10: ${greaterThan10}, всього > 10: ${countGreaterThan10}`);
}

// Task 5 Що потрібно передбачити, щоб функції могли повертати об'єкти?
// В C++ клас має мати конструктор копіювання для коректного повернення
// об'єкта за значенням. Компілятор може застосувати RVO/NRVO для оптимізації
// В TS об'єкти повертаються за посиланням, тому спеціальних вимог немає
class ReturnPoint {
    constructor(public x: number, public y: number) {}

    static midpoint(a: ReturnPoint, b: ReturnPoint): ReturnPoint {
        return new ReturnPoint((a.x + b.x) / 2, (a.y + b.y) / 2);
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}

const exampleReturnObject = (): void => {
    console.log("\n")
    console.log("5. Повернення об'єктів з функцій:");
    const a = new ReturnPoint(0, 0);
    const b = new ReturnPoint(10, 6);
    const mid = ReturnPoint.midpoint(a, b);
    console.log(`Середня точка між ${a} і ${b} = ${mid}`);
}

// Task 6 Чим контейнер list відрізняється від vector?
// У vector елементи зберігаються послідовно в пам'яті, O(1) доступ за індексом,
// O(n) вставляння/видалення в середині
// У list двозв'язний список, O(1) вставляння/видалення в будь-якому місці,
// O(n) доступ за індексом, більше пам'яті на зберігання вказівників

class ListNode<T> {
    constructor(public value: T, public next: ListNode<T> | null = null) {}
}

class SimpleLinkedList<T> {
    private head: ListNode<T> | null = null;

    addFirst(item: T): void {
        this.head = new ListNode(item, this.head);
    }

    removeFirst(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    getAll(): T[] {
        const result: T[] = [];
        for (let node = this.head; node; node = node.next) {
            result.push(node.value);
        }
        return result;
    }
}

const exampleListVsVector = (): void => {
    console.log("\n")
    console.log("6. list vs vector:");
    console.log("\n")

    const vec = [10, 20, 30];
    console.log(`vector[1] = ${vec[1]}`);

    const list = new SimpleLinkedList<number>();
    list.addFirst(30);
    list.addFirst(20);
    list.addFirst(10);
    console.log(`list: ${list.getAll()}`);
    list.removeFirst();
    console.log(`list після removeFirst: ${list.getAll()}`);
}

// Task 7 Що робить алгоритм for_each? Навіщо у контейнерах map зберігаються пари?
// for_each застосовує задану функцію до кожного елемента контейнера в діапазоні [first, last)
// В map зберігаються пари key і value, бо map це асоціативний контейнер, де кожне значення
// прив'язане до унікального ключа для швидкого пошуку за ключем O(log n)
const exampleForEachAndMap = (): void => {
    console.log("\n")
    console.log("7. for_each та Map:");

    const fruits = ["яблуко", "банан", "вишня"];
    console.log("for_each по масиву:");
    fruits.forEach((fruit, i) => {
        console.log(`[${i}] ${fruit.toUpperCase()}`);
    });

    const studentGrades = new Map<string, number>();
    studentGrades.set("Олексій", 95);
    studentGrades.set("Марія", 88);
    studentGrades.set("Ігор", 72);

    console.log("\n")
    console.log("Map:");
    studentGrades.forEach((grade, name) => {
        console.log(`${name}: ${grade} балів`);
    });
}

// Task 8 Проаналізуйте можливі варіанти операцій з об'єктами
// MyClass obj це конструктор за замовчуванням. MyClass obj(args) це параметризований конструктор
// MyClass obj2(obj1) та MyClass obj2 = obj1, а саме конструктор копіювання
// func(obj) це копія при передачі за значенням. return obj - копія або move
// obj1 = obj2 - оператор присвоювання

class TrackedObject {
    value: number;

    // Конструктор за замовчуванням - MyClass obj
    constructor();
    // Параметризований конструктор - MyClass obj(args)
    constructor(value: number);
    constructor(value?: number) {
        this.value = value ?? 0;
        console.log(`Конструктор ${value !== undefined ? "з параметром" : "за замовчуванням"}: value = ${this.value}`);
    }

    // Конструктор копіювання - MyClass obj2(obj1) / MyClass obj2 = obj1
    static copyFrom(other: TrackedObject): TrackedObject {
        console.log(`Конструктор копіювання: value = ${other.value}`);
        return new TrackedObject(other.value);
    }

    // Оператор присвоювання - obj1 = obj2
    assign(other: TrackedObject): void {
        console.log(`Оператор присвоювання: ${this.value} <- ${other.value}`);
        this.value = other.value;
    }
}

// Передача за значенням - func(obj) викликає конструктор копіювання
const processObject = (obj: TrackedObject): void => {
    const copy = TrackedObject.copyFrom(obj);
    copy.value += 10;
    console.log(`Всередині функції: value = ${copy.value}`);
}

// Повернення об'єкта - return obj
const createObject = (val: number): TrackedObject => {
    const obj = new TrackedObject(val);
    console.log(`Повернення об'єкта з функції: value = ${obj.value}`);
    return obj;
}

const exampleOperationsTable = (): void => {
    console.log("\n")
    console.log("8. Операції з об'єктами:")

    console.log("\n")
    console.log("MyClass obj конструктор за замовчуванням")
    const obj1 = new TrackedObject();

    console.log("\n")
    console.log("MyClass obj(args) параметризований конструктор")
    const obj2 = new TrackedObject(42);

    console.log("\n")
    console.log(" MyClass obj2(obj1) конструктор копіювання")
    const obj3 = TrackedObject.copyFrom(obj2);

    console.log("\n")
    console.log("func(obj) передача за значенням - копія")
    processObject(obj2);

    console.log("\n")
    console.log("return obj повернення об'єкта")
    const obj4 = createObject(99);

    console.log("\n")
    console.log("obj1 = obj2 оператор присвоювання")
    obj1.assign(obj2);

    console.log("\n")
    console.log(`Результат: obj1 = ${obj1.value}, obj2 = ${obj2.value}, obj3 = ${obj3.value}, obj4 = ${obj4.value}`);
}

// Запуск всіх прикладів
export const runLevel2 = (): void => {
    console.log("\n")
    console.log("МКР Рівень 2");
    exampleObjectAsParam();
    exampleInterfaceVsAbstract();
    exampleMatrix();
    exampleCountIfVsFindIf();
    exampleReturnObject();
    exampleListVsVector();
    exampleForEachAndMap();
    exampleOperationsTable();
}
