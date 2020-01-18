import { Animal } from './Animal'
import { Flyable } from '../flyable/IFlyable';

export class Bird extends Animal implements Flyable{
    numberofWings: number;
    beak: boolean;

    constructor(name: string){
        super(name,4);
        this.numberofWings = 2;

    }

    
    breed(): string {
        return 'laying eggs';
    }
    land(){}
    fly(){}
    takeOff(){}
    

}