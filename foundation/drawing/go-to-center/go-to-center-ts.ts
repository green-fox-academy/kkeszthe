'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

console.log("Go to center");

function draw(x: number, y: number){
   for(let i: number = 0; i < 3; i++ ) {ctx.beginPath();
    ctx.moveTo(x*i,y*i);
    ctx.lineTo(300,200);
    ctx.stroke();}

};
draw(50,50);