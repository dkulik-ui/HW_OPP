// Task 1 Яким чином можна організувати додавання об'єктів?
// Додавання організовується через перевантаження оператора (в TS через наш метод add()),
// який приймає інший об'єкт того ж типу і повертає новий об'єкт з результатом додавання полів
class Vector {

    constructor(public x: number, public y: number) {}

    add(other: Vector): Vector {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    toString(): string {
        return `Vector(${this.x}, ${this.y})`;
    }
}

const exampleAddObjects = (): void => {
    console.log("1. Додавання об'єктів:");
    const v1 = new Vector(1, 2);
    const v2 = new Vector(3, 4);

    const sum = v1.add(v2);
    console.log(`${v1} + ${v2} = ${sum}`);
}

// Task 2 Чим особливий випадок додавання "число + об'єкт"?
// Особливість в тому, що число не має методів для роботи з об'єктом,
// тому об'єкт має реалізувати оператор приведення до числа,
// щоб компілятор міг автоматично привести об'єкт до числа
class Num {
    constructor(public amount: number) {}

    valueOf(): number {
        return this.amount;
    }
}

const exampleNumberPlusObject = (): void => {
    console.log("\n")
    console.log("2. Число + об'єкт:");
    const price = new Num(100);
    const total = 50 + +price;
    console.log(`50 + Num(100) = ${total}`);
}

// Task 3 Як здійснюється перевантаження оператора "[]"?
// В C++ перевантажується через метод T& operator[](int index), який повертає посилання на елемент
// Зазвичай роблять дві версії: const і non-const. В TS/JS прямого перевантаження немає, тому використовують get/set або Proxy
class SafeArray<T> {
    private data: T[];

    constructor(items: T[]) {
        this.data = [...items];
    }

    get(index: number): T | undefined {
        if (index < 0 || index >= this.data.length) {
            console.log(`Index ${index} - вихід за межі масиву`);
            return undefined;
        }
        return this.data[index];
    }

    set(index: number, value: T): void {
        if (index >= 0 && index < this.data.length) {
            this.data[index] = value;
        }
    }
}

const exampleBracketOperator = (): void => {
    console.log("\n")
    console.log("3. Перевантаження оператора []:");
    const arr = new SafeArray<string>(["яблуко", "банан", "вишня"]);
    console.log(`arr.get(1) = ${arr.get(1)}`);
    arr.get(10);

    const proxied = new Proxy(["a", "b", "c"], {
        get(target, prop, receiver) {
            const idx = Number(prop);
            if (!isNaN(idx) && (idx < 0 || idx >= target.length)) {
                return `index ${idx} out of bounds`;
            }
            return Reflect.get(target, prop, receiver);
        }
    });
    console.log(`Proxy arr[1] = ${proxied[1]}`);
    console.log(`Proxy arr[99] = ${proxied[99]}`);
}

// Task 4 Які можливості перевантаження операторів в інших мовах програмування?
// C++ повна підтримка, перевантаження майже всіх операторів через operator+, operator[] тощо
// C# статичні методи public static operator+
// Python магічні методи __add__, __sub__
// Kotlin operator fun plus()
// Java та JS/TS не підтримують перевантаження операторів


// Task 5 Які ключові слова для оголошення класів-інтерфейсів у Visual C++?
// В C++ інтерфейс оголошується через __interface або як абстрактний клас з чисто віртуальними
// методами (virtual void method() = 0). В TS використовується ключове слово interface
// Клас може реалізувати декілька інтерфейсів одночасно (implements)
interface Drawable {
    draw(): void;
    getArea(): number;
}

interface Resizable {
    resize(factor: number): void;
}

class Circle implements Drawable, Resizable {
    constructor(private radius: number) {}

    draw(): void {
        console.log(`Малюю коло з r=${this.radius}`);
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    resize(factor: number): void {
        this.radius *= factor;
    }
}

const exampleInterfaces = (): void => {
    console.log("\n")
    console.log("5. Класи-інтерфейси:");
    const circle: Drawable & Resizable = new Circle(5);
    circle.draw();
    console.log(`Площа: ${circle.getArea().toFixed(2)}`);
    circle.resize(2);
    circle.draw();
}

// Task 6 Чому не є коректним повернення функціями вказівників на локальні об'єкти?
// Бо локальний об'єкт створюється на стеку і знищується при виході з функції
// Повернений вказівник вказуватиме на звільнену пам'ять (dangling pointer),
// що призводить до undefined behavior. В TS/JS цієї проблеми немає завдяки garbage collector
const createLocalObject = (): { value: number } => {
    return { value: 42 };
}

const exampleLocalPointer = (): void => {
    console.log("\n")
    console.log("6. Повернення вказівника на локальний об'єкт:");
    const obj = createLocalObject();
    console.log(`Об'єкт створений у функції: value = ${obj.value}`);
}

// Task 7 Чого не повинно бути у класі-інтерфейсі згідно з канонами ООП?
// Не повинно бути полів з даними, реалізації методів, конструкторів, статичних методів з логікою
// Інтерфейс має містити лише оголошення чисто віртуальних методів, що визначають контракт
interface IShape {
    calculateArea(): number;
    getPerimeter(): number;
}

class Rectangle implements IShape {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Task 8 Чи може бути в класі-інтерфейсі віртуальний деструктор?
// Так, і він повинен бути. В C++ інтерфейс має мати virtual ~Interface() = default, інакше
// при delete через вказівник на базовий клас не викличеться деструктор нащадка,що
// призведе до витоку ресурсів. В TS аналог — Symbol.dispose
interface IDisposable {
    [Symbol.dispose](): void;
}

class FileHandler implements IDisposable {
    constructor(private filename: string) {
        console.log(`Відкрито файл: ${filename}`);
    }

    [Symbol.dispose](): void {
        console.log(`Закрито файл: ${this.filename}`);
    }
}

class DatabaseConn implements IDisposable {
    constructor(private connStr: string) {
        console.log(`Підключення до БД: ${connStr}`);
    }

    [Symbol.dispose](): void {
        console.log(`Відключення від БД: ${this.connStr}`);
    }
}

const exampleVirtualDestructor = (): void => {
    console.log("\n")
    console.log("8. Віртуальний деструктор в інтерфейсі:");
    console.log("\n")

    const resources: IDisposable[] = [
        new FileHandler("data.txt"),
        new DatabaseConn("localhost:5432/mydb"),
    ];

    for (const r of resources) {
        r[Symbol.dispose]();
    }
}

// Запуск всіх прикладів, де вони потрібні
export const runLevel1 = (): void => {
    console.log("МКР Рівень 1");
    exampleAddObjects();
    exampleNumberPlusObject();
    exampleBracketOperator();
    exampleInterfaces();
    exampleLocalPointer();
    exampleVirtualDestructor();
}
