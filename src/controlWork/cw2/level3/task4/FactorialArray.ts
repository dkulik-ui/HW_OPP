import { FactorialBase } from "./FactorialBase";

export class FactorialArray extends FactorialBase {
    private numbers: number[];

    constructor(numbers: number[]) {
        super(0);
        this.numbers = [...numbers];
    }

    // Використовує батьківський factorial() для конкретного числа
    factorialOf(n: number): number {
        this.num = n;
        return this.factorial();
    }

    printTable(): void {
        console.log("Число\t|\tФакторіал");
        console.log("-----\t|\t---------");

        for (const n of this.numbers) {
            const fact = this.factorialOf(n);
            console.log(`${n}\t|\t${fact}`);
        }
    }

    getNumbers(): number[] {
        return [...this.numbers];
    }
}
