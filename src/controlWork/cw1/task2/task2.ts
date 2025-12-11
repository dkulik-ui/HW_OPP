class Vector {
    constructor(public x: number, public y: number) {}

    add(other: Vector): Vector {
        return new Vector(this.x + other.x, other.y + this.y);
    }
}

const proofVector = (): void => {
    const x = new Vector(1, 4);
    const y = new Vector(3, 5);
    
    const newVector = x.add(y);

    console.log('X Vector: ', x)
    console.log('Y Vector: ', y)
    console.log('New Vector: ', newVector)
}

class FriendSecret {
    private readonly secret = 42;

    static reveal(obj: FriendSecret): number {
        return obj.secret;
    }
}

const proofFriend = (): void => {
    const secret = new FriendSecret();

    console.log('Private Readonly Secret is: ', FriendSecret.reveal(secret));
}

export const taskTwo = (): void => {
    console.log('Proof Vector');
    proofVector();

    console.log('\n');

    console.log('Proof Friend');
    proofFriend();
}
