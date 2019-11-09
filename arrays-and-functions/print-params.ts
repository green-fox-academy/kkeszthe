"use strict";
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...parameters){
    for(let i: number = 0; i < parameters.length; i++){
        console.log(parameters[i]);
    }

}
printParams(1, 2, 3, 4, 5, 6);