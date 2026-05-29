import { Figure } from "./Figure";

export class Polygon extends Figure {
    constructor(
        centerX: number,
        centerY: number,
        private sides: number,
        private sideLength: number
    ) {
        super(centerX, centerY);
        if (sides < 3) throw new Error("Багатокутник має мати мінімум 3 сторони");
    }

    draw(): void {
        console.log(`[Багатокутник] ${this.sides}-кутник, сторона=${this.sideLength}, ${this.getInfo()}`);
    }

    hide(): void {
        console.log(`[Багатокутник] приховано`);
    }

    area(): number {
        // Площа
        const a = this.sideLength * this.scaleFactor;
        return (this.sides * a ** 2) / (4 * Math.tan(Math.PI / this.sides));
    }
}
