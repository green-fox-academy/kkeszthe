'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.
console.log("Drawing lines")

ctx.fillStyle = "red";
ctx.fillRect(0,200,600,1);
ctx.fill();

ctx.fillStyle = "green";
ctx.fillRect(300,0,1,400);
ctx.fill();
