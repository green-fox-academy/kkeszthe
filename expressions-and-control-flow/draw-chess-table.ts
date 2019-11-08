'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lineCount: number = 8;
let star: string = "";
let i: number, j: number;
for(i = 0; i < lineCount; i++){
    for (j =i; j%2===0 && i%2===0 ;j++){
        star= star + "% % % %"
    }
    for (j =i; j%2!=0 && i%2!=0 ;j++){
        star= star + " % % % %"
    }
console.log(star)
star=""
}