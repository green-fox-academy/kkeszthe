"use strict";
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


let matrixSize: number = 4;
	let matrix: number[][] =[];
	let i: number,j: number;
	let zero: number = 0, one: number = 1;
	
	
	for(i = 0; i < matrixSize; i++){
        matrix[i] = [];
	    for (j = 0; j < matrixSize ; j++){
	       if(j == matrixSize - i-1){
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j] = 0;
            }
	    }
	    
	  }
	
	console.log(matrix);