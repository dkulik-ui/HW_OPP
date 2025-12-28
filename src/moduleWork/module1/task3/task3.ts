import { findInRange } from "./utils/utils";

export const taskThree = () => {
    // String array
    const words: string[] = ['Africa', 'crystal', 'fruit', 'vegetable', 'pistol', 'uav', 'someWord', 'lastWord'];

    // Find words
    const wordsInRange = findInRange(
        words,
        'fruit',
        'someWord',
        (a, b) => a.localeCompare(b)
    );

    console.log(`Words in alphabetic range: ${wordsInRange}`);

    // Number array
    const numbers: number[] = [10, 25, 5, 0, -10, 15, 30, 20];

    // Find numbers
    const numbersInRange = findInRange(
        numbers,
        5,
        25,
        (a, b) => a - b
    );

    console.log(`Numbers in range: ${numbersInRange}`);
}