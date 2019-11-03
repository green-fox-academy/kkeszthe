'use strict';
let lineCount: number = 4;
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
let space: string="", star: string ="";
let i,j,k
for(i= 0;i<4;i++){
  for(k = lineCount-1-i;k>0;k--){
    space=space+" ";}
    for(j = 0;j<1+2*i;j++){
        star=star+"*";
}
console.log(space+star)
space=""
star=""
}