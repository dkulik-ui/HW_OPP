class IntPtr {
    constructor(public value: number = 0) {}
}

type IntRef = [number];

// Перевантаження функцій
// В TS перевантаження реалізується через union types / overload signatures
function sumOverload(result: IntRef, a: number): void;
function sumOverload(result: IntRef, a: number, b: number): void;
function sumOverload(result: IntRef, a: number, b: number, c: number): void;
function sumOverload(result: IntRef, a: number, b?: number, c?: number): void {
    result[0] = a + (b ?? 0) + (c ?? 0);
}

// Функція з параметрами за замовчуванням
function sumDefault(result: IntRef, a: number, b: number = 0, c: number = 0, d: number = 0): void {
    result[0] = a + b + c + d;
}

// Функція зі змінною кількістю параметрів
function sumVariadic(result: IntRef, ...args: number[]): void {
    result[0] = args.reduce((sum, val) => sum + val, 0);
}

// Повернення через вказівник
function sumViaPointer(result: IntPtr, a: number, b: number): void {
    result.value = a + b;
}

// Повернення через посилання
function sumViaReference(result: IntRef, a: number, b: number): void {
    result[0] = a + b;
}

export const taskFour = (): void => {
    console.log("Завдання 4:");
    const ref: IntRef = [0];

    console.log("\nа) Перевантаження функцій:");
    sumOverload(ref, 10);
    console.log(`sum(ref, 10) = ${ref[0]}`);
    sumOverload(ref, 10, 20);
    console.log(`sum(ref, 10, 20) = ${ref[0]}`);
    sumOverload(ref, 10, 20, 30);
    console.log(`sum(ref, 10, 20, 30) = ${ref[0]}`);

    console.log("\nб) Параметри за замовчуванням:");
    sumDefault(ref, 5);
    console.log(`sumDefault(ref, 5) = ${ref[0]}`);
    sumDefault(ref, 5, 10);
    console.log(`sumDefault(ref, 5, 10) = ${ref[0]}`);
    sumDefault(ref, 5, 10, 15);
    console.log(`sumDefault(ref, 5, 10, 15) = ${ref[0]}`);
    sumDefault(ref, 5, 10, 15, 20);
    console.log(`sumDefault(ref, 5, 10, 15, 20) = ${ref[0]}`);

    console.log("\nв) Змінна кількість параметрів:");
    sumVariadic(ref, 1, 2, 3, 4, 5);
    console.log(`sumVariadic(ref, 1,2,3,4,5) = ${ref[0]}`);
    sumVariadic(ref, 100, 200);
    console.log(`sumVariadic(ref, 100, 200) = ${ref[0]}`);
    sumVariadic(ref, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(`sumVariadic(ref, 1..10) = ${ref[0]}`);

    // Повернення через вказівник
    console.log("\nПовернення через вказівник:");
    const ptr = new IntPtr();
    sumViaPointer(ptr, 42, 58);
    console.log(`sumViaPointer(ptr, 42, 58) -> ptr.value = ${ptr.value}`);

    // Повернення через посилання
    console.log("\nПовернення через посилання:");
    sumViaReference(ref, 77, 23);
    console.log(`sumViaReference(ref, 77, 23) -> ref[0] = ${ref[0]}`);
}
