export class DynamicArray2D<T> {
    private data: T[][];
    private rows: number;
    private cols: number;

    constructor(rows: number, cols: number, defaultValue: T) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: rows }, () => Array(cols).fill(defaultValue));
    }

    // Встановлює значення
    set(row: number, col: number, value: T): void {
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this.data[row][col] = value;
        }
    }

    // Отримує значення
    get(row: number, col: number): T {
        return this.data[row][col];
    }

    getRows(): number { return this.rows; }
    getCols(): number { return this.cols; }

    // Копіювання за рядками
    copyByRows(): DynamicArray2D<T> {
        const copy = new DynamicArray2D<T>(this.rows, this.cols, this.data[0][0]);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                copy.data[i][j] = this.data[i][j];
            }
        }
        return copy;
    }

    // Копіювання за стовпцями
    copyByCols(): DynamicArray2D<T> {
        const copy = new DynamicArray2D<T>(this.rows, this.cols, this.data[0][0]);
        for (let j = 0; j < this.cols; j++) {
            for (let i = 0; i < this.rows; i++) {
                copy.data[i][j] = this.data[i][j];
            }
        }
        return copy;
    }

    // Копіювання вибраного рядка
    copyRow(row: number): T[] {
        if (row < 0 || row >= this.rows) throw new Error(`Рядок ${row} поза межами [0..${this.rows - 1}]`);
        return [...this.data[row]];
    }

    // Копіювання вибраного стовпчика
    copyCol(col: number): T[] {
        if (col < 0 || col >= this.cols) throw new Error(`Стовпець ${col} поза межами [0..${this.cols - 1}]`);
        return this.data.map(row => row[col]);
    }

    // Копіювання головної діагоналі
    copyMainDiagonal(): T[] {
        const size = Math.min(this.rows, this.cols);
        const diagonal: T[] = [];
        for (let i = 0; i < size; i++) {
            diagonal.push(this.data[i][i]);
        }
        return diagonal;
    }

    // Потокове виведення
    print(): void {
        for (let i = 0; i < this.rows; i++) {
            const row = this.data[i].map(v => String(v).padStart(6)).join(" ");
            console.log(`${row}`);
        }
    }

    // Потокове введення з масиву значень
    static fromInput<U>(rows: number, cols: number, values: U[]): DynamicArray2D<U> {
        if (values.length < rows * cols) {
            throw new Error(`Недостатньо значень: потрібно ${rows * cols}, отримано ${values.length}`);
        }
        const arr = new DynamicArray2D<U>(rows, cols, values[0]);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                arr.data[i][j] = values[i * cols + j];
            }
        }
        return arr;
    }

    toString(): string {
        return this.data.map(row => row.join("\t")).join("\n");
    }
}
