export abstract class Animal {
    name: string;
    age: number;
    gender: string;
    height: number;
    numberOfLegs: number;

        constructor(name: string, numberOfLegs: number) {

            if(Math.floor(Math.random()*2) === 1){
                this.gender = 'male'
                } else {
                this.gender = 'female'
                };
            this.name = name;
            this.age = Math.floor(Math.random()*20);
            this.height = Math.floor(Math.random()*60);
            this.numberOfLegs = numberOfLegs;
        
    }

    getName(): string {
        return this.name;
    };
    abstract breed();
    eat(){};
    drink(){};
    sleep(){};
}