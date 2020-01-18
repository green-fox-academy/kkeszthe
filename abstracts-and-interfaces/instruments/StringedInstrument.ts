import { Instrument } from "./Instrument";

export abstract class StringedInstrument extends Instrument {
    numberOfstrings: number;

    constructor(name?: string, numberOfstring?: number){
        super(name);
        this.numberOfstrings = numberOfstring;
    };

    abstract sound(): string;
    play(): void {
        console.log(this.name
        + ", a "
        + this.numberOfstrings
        + "-stringed instrument that goes "
        + this.sound()
        )
    }
   
}