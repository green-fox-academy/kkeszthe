import { StringedInstrument } from "./StringedInstrument";

export class Violin extends StringedInstrument {

    constructor(numberOfstring: number = 4){
        super("Violin", numberOfstring);
    };

    sound(): string {
        return "Screech";
    }
}