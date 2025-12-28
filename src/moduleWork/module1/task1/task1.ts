import { Department } from "./Department";
import { Faculty } from "./Faculty";
import { University } from "./University";
import { UniversityUnit } from "./UniversityUnit";

export function taskOne(): void {
    const units: UniversityUnit[] = [
        new University("МНТУ", "Київ"),
        new Faculty("Інженерія програмного забезпечення"),
        new Department("Програмна інженерія"),
    ];

    for (const unit of units) {
        console.log(unit.getInfo());
    }
}