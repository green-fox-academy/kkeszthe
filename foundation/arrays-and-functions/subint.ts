'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

/* function subint(i: number, arr: number[]): number[]{
    let arr2: string[] = [];
    for(let index: number = 0; index < arr.length; index++){
        
        arr2.push(arr[index].toString());
    }
    let arr3: number[] = [];
    for (let index: number = 0; index < arr2.length; index++){
        if (arr2[index].search(i.toString())>= 0){arr3.push(index)}
    }
    return arr3;
} */

/* function subint(i: number, arr: number[]): number[]{
    let arr2: number[] = [];
    for(let index: number = 0; index < arr.length; index++){
        
     if (arr[index].toString().search(i.toString())>= 0){
        arr2.push(index)
     };
    }
    
    return arr2;
} */

function subint(i: number, arr: number[]): number[]{
    let arr2: number[] = [];
     arr.map(function (value: number, index: number){
         if(value.toString().search(i.toString())>= 0){
             arr2.push(index)
            }
        })
     return arr2
}