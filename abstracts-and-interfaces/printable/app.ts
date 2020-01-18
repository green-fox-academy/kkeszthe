import { Printable } from './IPrintable';
import { Domino } from './Domino';
import { ToDo } from './ToDo';

let domino = new Domino;
console.log(domino.printAllFiles());

let toDo = new ToDo("Buy Milk", "high", true)

console.log(toDo.printAllFiles());