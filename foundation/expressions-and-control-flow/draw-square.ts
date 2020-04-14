'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let space: string = "", percentage: string = "";
let i: number,j: number,k: number, l: number;

for (i=0; i<lineCount; i++){
    for(j=i; j === 0 || j === 5;j++){
        percentage = percentage + "%%%";
    }
    for (k=i; k!=0 && k<i+1 && k!=5;k++){
        percentage = percentage + "%";
    }
    for(l=i; l>0 && l<i+4 && i!=5;l++){
        space = space + " ";
    }

    console.log(percentage + space + percentage);
    percentage = "";
    space = "";
}
