import { Plant } from "./Plant";

export class Tree extends Plant {
    private static minimum = 10;
    private static absorb = 4/10;
    private static type = "tree";

    constructor(colour: string) {
        super(colour, 0, true, Tree.minimum, Tree.absorb, Tree.type);
    }
}