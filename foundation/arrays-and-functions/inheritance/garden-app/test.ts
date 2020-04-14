import { Plant } from "./Plant";
import { Flower } from "./Flower";
import { Tree } from "./Tree";
import { Garden } from "./Garden";


let garden = new Garden();
garden.addFlower(new Flower("yellow"));
garden.addFlower(new Flower("blue"));
garden.addTree(new Tree("purple"));
garden.addTree(new Tree("orange"));

garden.status();

console.log("\n")

garden.water(40);

garden.status();

console.log("\n")

garden.water(70);

garden.status();