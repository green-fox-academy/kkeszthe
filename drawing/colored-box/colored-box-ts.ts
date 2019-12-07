'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
console.log("Coloring boxes")

ctx.beginPath();
ctx.moveTo(50,50)
ctx.lineTo(100,50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,50)
ctx.strokeStyle = "purple";
ctx.lineTo(100,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100,100)
ctx.strokeStyle = "blue";
ctx.lineTo(50,100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,100)
ctx.strokeStyle = "red";
ctx.lineTo(50,50);
ctx.stroke();
