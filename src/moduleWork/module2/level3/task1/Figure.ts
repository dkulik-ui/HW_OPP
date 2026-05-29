export abstract class Figure {
    protected centerX: number;
    protected centerY: number;
    protected rotationAngle: number; // у градусах
    protected scaleFactor: number;

    constructor(centerX: number, centerY: number) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.rotationAngle = 0;
        this.scaleFactor = 1;
    }

    // Зобразити фігуру на екрані
    abstract draw(): void;

    // Зробити фігуру невидимою
    abstract hide(): void;

    // Повернути фігуру на заданий кут
    rotate(angle: number): void {
        this.rotationAngle = (this.rotationAngle + angle) % 360;
        console.log(`Повернуто на ${angle}°, загальний кут: ${this.rotationAngle}°`);
    }

    // Перемістити фігуру на заданий вектор
    move(dx: number, dy: number): void {
        this.centerX += dx;
        this.centerY += dy;
        console.log(`Переміщено на (${dx}, ${dy}), нова позиція: (${this.centerX}, ${this.centerY})`);
    }

    // Масштабування
    scale(factor: number): void {
        this.scaleFactor *= factor;
        console.log(`Масштаб: ${this.scaleFactor.toFixed(2)}`);
    }

    getInfo(): string {
        return `центр=(${this.centerX}, ${this.centerY}), кут=${this.rotationAngle}°, масштаб=${this.scaleFactor.toFixed(2)}`;
    }
}
