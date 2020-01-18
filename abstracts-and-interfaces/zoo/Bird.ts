import { Animal } from './Animal'

export class Bird extends Animal {
    numberofWings: number;
    beak: boolean;

    constructor(name: string){
        super(name,4);
        this.numberofWings = 2;

    }

    
    breed(): string {
        return 'laying eggs';
    }
    

}