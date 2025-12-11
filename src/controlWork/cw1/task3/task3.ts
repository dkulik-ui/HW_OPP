class Base {
    private readonly d1 = 'd1';

    protected readonly d2 = 'd2';
    protected readonly m2 = 'm2';

    public readonly d3 = 'd3';
    public readonly m3 = 'm3';  
    
    public proofOfBase () {
        console.log('Available d1: ', this.d1);
        console.log('Available d2: ', this.d2);
        console.log('Available d3: ', this.d3);
        console.log('Available m2: ', this.m2);
        console.log('Available m3: ', this.m3);

        // @ts-expect-error
        console.log('Unavailable d4: ', this.d4);
        // @ts-expect-error
        console.log('Unavailable m4: ', this.m4);
        // @ts-expect-error
        console.log('Unavailable d5: ', this.d5);
        // @ts-expect-error
        console.log('Unavailable m5: ', this.m5);
        // @ts-expect-error
        console.log('Unavailable d6: ', this.d6);
        // @ts-expect-error
        console.log('Unavailable m6: ', this.m6);
        // @ts-expect-error
        console.log('Unavailable base: ', this.base);
    }
}

class Derived extends Base {
    private readonly d4 = 'd4';
    private readonly m4 = 'm4';

    protected readonly d5 = 'd5';
    protected readonly m5 = 'm5';

    public readonly d6 = 'd6';
    public readonly m6 = 'm6';  
    
    public proofOfDerived () {
        console.log('Available d2: ', this.d2);
        console.log('Available m2: ', this.m2);
        // Transfered to protected in this class
        console.log('Available d3: ', this.d3);
        console.log('Available m3: ', this.m3);

        console.log('Available d4: ', this.d4);
        console.log('Available m4: ', this.m4);
        console.log('Available d5: ', this.d5);
        console.log('Available m5: ', this.m5);
        console.log('Available d6: ', this.d6);
        console.log('Available m6: ', this.m6);

        // @ts-expect-error
        console.log('Unavailable d1: ', this.d1);
    }
}


const proofOfBaseObject = () => {
    const baseObj = new Base();

    console.log('Available d3: ', baseObj.d3)
    console.log('Available m3: ', baseObj.m3)
}

const proofOfDerivedObject = () => {
    const derivedObj = new Derived();

    console.log('Available d6: ', derivedObj.d6)
    console.log('Available m6: ', derivedObj.m6)
}

export const taskThree = () => {
    const base = new Base();
    const derived = new Derived();

    console.log('Proof Of Base');
    base.proofOfBase();

    console.log('\n');

    console.log('Proof Base Object');
    proofOfBaseObject();

    console.log('\n');

    console.log('Proof Of Derived');
    derived.proofOfDerived();

    console.log('\n');

    console.log('Proof Derived Object');
    proofOfDerivedObject();
}
