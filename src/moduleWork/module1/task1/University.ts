import { UniversityUnit } from "./UniversityUnit";

export class University extends UniversityUnit {
    constructor(name: string, private city: string) {
      super(name);
    }

    getInfo(): string {
      return `Університет: ${this.name}, місто: ${this.city}`;
    }
}