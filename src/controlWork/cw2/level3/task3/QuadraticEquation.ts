import { Equation } from "./Equation";

// ax^2 + bx + c = 0
export class QuadraticEquation extends Equation {
    constructor(
        private a: number,
        private b: number,
        private c: number
    ) {
        super();
    }

    solve(): number[] {
        const discriminant = this.b ** 2 - 4 * this.a * this.c;

        if (discriminant < 0) return [];

        if (discriminant === 0) {
            return [-this.b / (2 * this.a)];
        }

        const sqrtD = Math.sqrt(discriminant);
        return [
            (-this.b + sqrtD) / (2 * this.a),
            (-this.b - sqrtD) / (2 * this.a)
        ];
    }

    toString(): string {
        const bStr = this.b >= 0 ? `+ ${this.b}x` : `- ${Math.abs(this.b)}x`;
        const cStr = this.c >= 0 ? `+ ${this.c}` : `- ${Math.abs(this.c)}`;
        return `${this.a}x^2 ${bStr} ${cStr} = 0`;
    }
}
