"use strict"
// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
let numList: number [] = [3, 4, 5, 6, 7];
console.log(numList.reverse());
numList.reverse();
let toBeReversed: number [] = [...numList];
let i: number,j: number;
for(i = 0; i < numList.length; i++){
    numList[i] = toBeReversed[toBeReversed.length-i-1];
}
console.log(numList);