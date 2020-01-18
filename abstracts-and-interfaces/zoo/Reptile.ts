import { Animal } from './Animal'

export class Reptile extends Animal {
    numberOfscale: number;

    constructor(name: string){
        super(name,4);
        this.numberOfscale = Infinity;

    }
    breed(): string {
        return 'laying eggs';
    }
    eat(){};
    drink(){};
    sleep(){};
    

}