'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let space: string="", star: string ="";
let i,j,k
for(i= 0;i<7;i++){
  for(k = Math.abs(lineCount-4-i);k>0;k--){
    space=space+" ";
}
    for(j = 0;j<(-(Math.abs(2*(i-3)))+7);j++){
        star=star+"*";
        
}
console.log(space+star);
space="";
star="";
}