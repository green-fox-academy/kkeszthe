"use strict";
// -  Create a function called `factorio`
//    that returns it's input's factorial
function factorio(input: number): number{
    let i: number, factorial: number = 1;
    for(i = 1; i < input+1; i++){
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorio(5));