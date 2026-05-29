export class Counter {
    private value: number;

    constructor(
        private minVal: number = 0,
        private maxVal: number = 100
    ) {
        if (minVal >= maxVal) {
            throw new Error(`Мінімум (${minVal}) має бути менше максимуму (${maxVal})`);
        }
        this.value = minVal;
    }

    // Збільшення значення на 1, скидання при досягненні максимуму
    increment(): void {
        if (this.value >= this.maxVal) {
            this.value = this.minVal;
        } else {
            this.value++;
        }
    }

    // Повернення поточного значення
    getValue(): number {
        return this.value;
    }

    // Скидання до мінімального значення
    reset(): void {
        this.value = this.minVal;
    }

    // Встановлення нових меж
    setRange(min: number, max: number): void {
        if (min >= max) throw new Error("Мінімум має бути менше максимуму");
        this.minVal = min;
        this.maxVal = max;
        if (this.value < min || this.value > max) {
            this.value = min;
        }
    }

    getMin(): number { return this.minVal; }
    getMax(): number { return this.maxVal; }

    toString(): string {
        return `Counter(${this.value}) [${this.minVal}..${this.maxVal}]`;
    }
}
