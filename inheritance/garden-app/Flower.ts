import { Plant } from "./Plant";

export class Flower extends Plant {
    private static minimum = 5;
    private static absorb = 3/4;
    private static type = "flower";

    constructor(colour: string) {
        super(colour, 0, true, Flower.minimum, Flower.absorb, Flower.type);
    }
}