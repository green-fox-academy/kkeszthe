import { Plant } from "./Plant";
import { Flower } from "./Flower";
import { Tree } from "./Tree";

class Garden {
    

}

let garden: Plant[] = [];
garden.push(new Flower("yellow"));
garden.push(new Flower("blue"));
garden.push(new Tree("purple"));
garden.push(new Tree("orange"));

function status (input: Plant[]): void {
    input.forEach(function (element) {
        console.log(element.status());
})
};

function water(amount, input: Plant[] = garden): void {
    let toWater: number = 0;
    garden.forEach((element) => {
        if(element.need){
            toWater++;
        }
    })
    amount = amount/toWater;
    garden.forEach((element) => {
        element.getWater(amount);
    })
}

status(garden);

console.log("\n")

water(40);

status(garden);

console.log("\n")

water(70);

status(garden);