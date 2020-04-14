"use strict";
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
function sum(a: number): number {
    let i: number, sum: number = 0;
    for(i = 0; i < a+1; i++){
        sum = sum + i
    }
    return sum;
}
console.log(sum(4));