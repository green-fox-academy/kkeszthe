
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

console.log("horizontal lines");
function horizontalLines(x: number, y: number){
    for(let i: number = 0; i < 3; i++){
        ctx.beginPath();
        ctx.moveTo(x+1+(i*50), y+1+i);
        ctx.lineTo(x+1+(i*50)+50, y+1+i);
        ctx.stroke();
    }
}

horizontalLines(50,50);