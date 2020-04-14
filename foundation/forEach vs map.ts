'use strict'

const array1: number[] = [];
const array2: number[] = [];
let array3: number[] = [];

for(let i: number = 0; i < 5; i++){
    array1.push(i);
    array2.push(i);
}

console.log(array1);
console.log(array2);


console.log('Changing Array1 with forEach()')
array1.forEach((element: number, index: number) => ++element);
console.log(array1);
array1.forEach((element: number, index: number) => array1[index]++);
console.log(array1);
//forEach() has no return value, therefore it is undefined and array1.forEach((element: number, index: number) => ++element) cannot be given as a value to array3

console.log('Changing Array 2 with map()')
let array4 = array2.map((element: number, index: number) => ++element);
console.log(array2);
console.log(array4);