import { Pair } from "./Pair";

export function taskFour(): void {
    const pairOne = new Pair<number, number>(10, 20);
    const pairTwo = new Pair<number, string>(1, "десять");

    console.log(pairOne.getInfo());
    console.log(pairTwo.getInfo());
}
