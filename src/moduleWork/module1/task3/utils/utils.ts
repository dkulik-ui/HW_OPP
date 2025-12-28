export const findInRange = <T>(
    arr: T[],
    min: T,
    max: T,
    compare: (a: T, b: T) => number
): T[] => {
    return arr.filter(
        item => compare(item, min) >= 0 && compare(item, max) <= 0
    );
}