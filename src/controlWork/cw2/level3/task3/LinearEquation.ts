import { Equation } from "./Equation";

// ax + b = 0
export class LinearEquation extends Equation {
    constructor(
        private a: number,
        private b: number
    ) {
        super();
    }

    solve(): number[] {
        if (this.a === 0) return [];
        return [-this.b / this.a];
    }

    toString(): string {
        const bStr = this.b >= 0 ? `+ ${this.b}` : `- ${Math.abs(this.b)}`;
        return `${this.a}x ${bStr} = 0`;
    }
}
