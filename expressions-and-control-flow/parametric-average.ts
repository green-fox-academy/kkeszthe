'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3


let sum: number = 0
let avg: number = 0

    for(let number: number = 1; number<=5;number++) {
       sum=sum+number;
       avg=((sum)/number);
        
    }console.log(sum);
    console.log(avg);
