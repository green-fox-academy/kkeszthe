import { Animal } from './Animal'

export class Mammal extends Animal {
    feedTheirYoungWithMilk: boolean;
    
    constructor(name: string){
        super(name,4);
        this.feedTheirYoungWithMilk = true;

    }
    
    breed():string{
        return'pushing miniature versions out'
    };
    eat(){};
    drink(){};
    sleep(){};
    

}