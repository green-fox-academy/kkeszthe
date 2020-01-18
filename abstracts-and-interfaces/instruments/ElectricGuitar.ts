import { StringedInstrument } from "./StringedInstrument";

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfstring: number = 6){
        super("Electric Guitar", numberOfstring);
    };


    sound(): string {
        return "Twang";
    }
}