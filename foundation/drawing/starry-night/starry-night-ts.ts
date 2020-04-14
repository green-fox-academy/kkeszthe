'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

const width: number = 600, hight: number = 400;
ctx.fillRect(0,0,width,hight);
for(let i: number = 0; i < 900; i++){
    let color: number = Math.random()*255;
    ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
    ctx.fillRect(Math.random()*1000,Math.random()*1000,5,5);
}