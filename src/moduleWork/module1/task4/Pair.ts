export class Pair<T, U> {
    constructor(
        public first: T,
        public second: U
    ) {}

    getInfo(): string {
        return `Пара: (${this.first}, ${this.second})`;
    }
}