import { Flower } from "./Flower";
import { Tree } from "./Tree";

export class Plant {
  colour: string;
  water: number;
  need: boolean;
  minimum: number;
  absorb: number;
  type: string;
  
  constructor(colour: string, water: number = 0, need: boolean = true,minimum: number, absorb: number, type: string) {
      this.colour = colour;
      this.water = water;
      this.need = need;
      this.minimum = minimum;
      this.absorb = absorb;
      this.type = type;
  }
}
