import { StringedInstrument } from "./StringedInstrument";

export class BassGuitar extends StringedInstrument {

    constructor(numberOfstring: number = 4){
        super("Bass Guitar", numberOfstring);
    };

    sound(): string {
        return "Duum-duum-duum";
    }
}