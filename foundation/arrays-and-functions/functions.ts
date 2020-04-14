'use strict';
//függvény, function, metódus
//Single Responsibility.OLID principle
// DRY = Don't Repeate Yourself

function greeting(){
    console.log("Hello");
    console.log("Este van");
}
greeting();

//function greet(paraméter,argumentum){}
//paraméter az egy lokális változó
//nincs kimeneti érték = VOID függvény
function greet(name: string): void{
console.log("Hello "+ name +"!");
}
greet("Zsuzs");

function add1(a: number, b: number): void {
    console.log(a + b);
}

let result= add1(1, 3);
//console.log(result*2) void * 2 nem értelmezhető

function add2 (a: number, b: number): number {
    return a + b;
}
console.log("1 + 3 = ");
let result2= add2(1, 3);
console.log(result2);

let egyikSzam = 10;
let b = 20;
let result3 = add2(egyikSzam, b);

let a = "1";
parseInt(a);

let sub = function(a: number, b: number): number {
    return a-b;
}


export {};