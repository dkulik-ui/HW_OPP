import { Figure } from "./Figure";

export class Triangle extends Figure {
    constructor(
        centerX: number,
        centerY: number,
        private side1: number,
        private side2: number,
        private side3: number
    ) {
        super(centerX, centerY);
    }

    draw(): void {
        console.log(`[Трикутник] сторони=(${this.side1}, ${this.side2}, ${this.side3}), ${this.getInfo()}`);
    }

    hide(): void {
        console.log(`[Трикутник] приховано`);
    }

    area(): number {
        // Площа
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3)) * this.scaleFactor ** 2;
    }
}
