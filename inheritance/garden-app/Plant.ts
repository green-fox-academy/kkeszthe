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
  

  status(): string {
    let waterNeed: string;
    if(this.need){
      waterNeed = "needs water"
    } else {
        waterNeed = "doesn't need water"
    }
    
    return "The " + this.colour + " " + this.type + " " + waterNeed;
  }

  getWater(amount: number): void {
    amount *= this.absorb;
    if(this.need){
        this.water += amount;
    }
    this.water < this.minimum ? this.need = true : this.need = false;
}
}
