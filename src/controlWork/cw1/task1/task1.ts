class Base {
    public readonly valueOne = "A";

    public check () {
        console.log('Checked from base')
    }
}

class Derived extends Base {
    public readonly valueTwo = "B";

    public check () {
        console.log('Checked from Derived')
    }
}

const proofOne = (): void => {
    const prototype = new Derived();
    const base: Base = prototype;

    console.log('base.valueOne =', base.valueOne);
    // @ts-expect-error
    console.log('base.valueTwo =', base.valueTwo);
}

const proofTwo = (): void => {
    const base = new Base();
    // @ts-expect-error
    const derived: Derived = base;

    console.log('derived.valueOne =', derived.valueOne);
    console.log('derived.valueTwo =', derived.valueTwo);
    derived.check();
}

const proofThree = (): void => {
    // Safe (upcasting)
    const derived = new Derived();
    const baseFromDerived: Base = derived;

    console.log('baseFromDerived.valueOne =', baseFromDerived.valueOne);
    baseFromDerived.check()

    const base = new Base();

    // Unsafe
    const casted = base as Derived;

    console.log(casted.valueOne); 
    console.log(casted.valueTwo); // TS doesn't mark it as error, but it will lead to undefined
}

const proofFour = (): void => {
    const base: Base = new Derived();
    base.check(); // Checked from Derived
}

export const taskOne = (): void => {
    console.log('First proof');
    proofOne();

    console.log('\n');

    console.log('Second proof');
    proofTwo();

    console.log('\n');

    console.log('Third proof');
    proofThree();

    console.log('\n');

    console.log('Fourth proof');
    proofFour();
}