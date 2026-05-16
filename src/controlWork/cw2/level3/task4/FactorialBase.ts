// Task 4 Віртуальна функція обчислення факторіалу
// Базовий клас містить число і віртуальну функцію factorial()
// Похідний клас містить масив чисел і виводить таблицю факторіалів

export abstract class FactorialBase {
    protected num: number;

    constructor(num: number) {
        this.num = num;
    }

    factorial(): number {
        if (this.num < 0) return -1;
        if (this.num <= 1) return 1;

        let result = 1;
        for (let i = 2; i <= this.num; i++) {
            result *= i;
        }
        return result;
    }

    getNumber(): number {
        return this.num;
    }
}
