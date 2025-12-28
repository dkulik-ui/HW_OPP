import { UniversityUnit } from "./UniversityUnit";

export class Department extends UniversityUnit {
    constructor(name: string) {
      super(name);
    }

    getInfo(): string {
      return `Кафедра: ${this.name}`;
    }
}