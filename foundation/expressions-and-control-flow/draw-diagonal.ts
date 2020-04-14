'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let space1: string = "", space2:string ="", percentage: string = "";
let i: number,j: number,k: number, l: number, m: number;

for (i=0; i<lineCount; i++){
    for(j=i; j === 0 || j === 5;j++){
        percentage = percentage + "%%";
    }
    for (k=i; k!=0 && k<i+1 && k!=5;k++){
        percentage = percentage + "%";
    }
    for (l=0; l<i-1 && i!=1 && i<5; l++){
        space1 = space1 + " ";
    }
    for (m=i; m>0 && m<4; m++){
        space2 = space2 + " ";
    }

    console.log(percentage + space1 + percentage + space2 + percentage);
    percentage = "";
    space1 = "";
    space2 = "";
}