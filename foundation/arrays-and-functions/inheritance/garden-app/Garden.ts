import { Plant } from "./Plant";
import { Flower } from "./Flower";
import { Tree } from "./Tree";

export class Garden {
    plants: Plant[] = [];

    constructor (){
        this.plants = []
    }

    addFlower(flower: Flower): Plant[] {
        this.plants.push(flower);
        return this.plants;
    }
    
    addTree(tree: Tree): Plant[] {
        this.plants.push(tree);
        return this.plants;
    }

    status(): void {
        this.plants.forEach((element) => {
            if(element.need){
                console.log("The " + element.colour + " " + element.type + " needs water")
            } else {
                console.log("The " + element.colour + " " + element.type + " doesn't need water")
            }
    })
    };

    water(amount): void {
        let toWater: number = 0;
        this.plants.forEach((element) => {
            if(element.need){
                toWater++;
            }
        })
        this.plants.forEach((element) => {
            if(element.need){
            element.water += amount*element.absorb/toWater;
        }
        element.water < element.minimum ? element.need = true : element.need = false;
        })
    }
}

