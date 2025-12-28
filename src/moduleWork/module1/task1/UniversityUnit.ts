export abstract class UniversityUnit {
    constructor(
      protected name: string
    ) {};

    abstract getInfo(): string;
}
