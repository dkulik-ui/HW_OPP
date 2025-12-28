import { UniversityUnit } from "./UniversityUnit";

export class Faculty extends UniversityUnit {
    constructor(name: string) {
      super(name);
    }

    getInfo(): string {
      return `Факультет: ${this.name}`;
    }
}