import { Figure } from "./Figure";

export class Quadrilateral extends Figure {
    constructor(
        centerX: number,
        centerY: number,
        private width: number,
        private height: number
    ) {
        super(centerX, centerY);
    }

    draw(): void {
        console.log(`[Чотирикутник] ${this.width}x${this.height}, ${this.getInfo()}`);
    }

    hide(): void {
        console.log(`[Чотирикутник] приховано`);
    }

    area(): number {
        // Площа
        return this.width * this.height * this.scaleFactor ** 2;
    }
}
