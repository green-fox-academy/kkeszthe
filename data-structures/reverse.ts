'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(text: string): string{
    let array: string[]=text.split("",text.length)
    let newArr: string[]=[];
    for(let i= 0; i<text.length; i++){
        newArr.push(array[array.length-i]);
    }
    return newArr.join("")
}

console.log(reverse(reversed));

export = reverse;