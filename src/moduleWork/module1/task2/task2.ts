import { Cone } from "./Cone";
import { SolidOfRevolution } from "./SolidOfRevolution";

export function taskTwo(): void {
    const solids: SolidOfRevolution[] = [
        new Cone(3, 5),
        new Cone(2, 4),
    ];

    for (const solid of solids) {
        console.log(solid.getInfo());
    }
}