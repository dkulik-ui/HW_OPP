import { SolidOfRevolution } from "./SolidOfRevolution";

export class Cone extends SolidOfRevolution {
    constructor(
        private readonly radius: number,
        private readonly height: number
    ) {
        super();
    }

    volume(): number {
        return (1 / 3) * Math.PI * this.radius ** 2 * this.height;
    }

    getInfo(): string {
        return `Конус: r=${this.radius}, h=${this.height}, V=${this.volume().toFixed(2)}`;
    }
}