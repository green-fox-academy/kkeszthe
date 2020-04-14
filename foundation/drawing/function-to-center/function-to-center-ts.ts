'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
const width: number = 600, hight: number = 400;
const frequency: number = 20;
let totalRepetition: number = width/frequency*2 + hight/frequency*2;

function toCenter(x: number, y: number){
    for(let i: number = 0; i < totalRepetition;i++){
        if(y < hight && x === 0){
            ctx.moveTo(x,y);
            ctx.lineTo(width/2,hight/2);
            ctx.stroke();
            y = y + frequency;
        } else if (x < width && y === hight){
            ctx.moveTo(x,y);
            ctx.lineTo(width/2,hight/2);
            ctx.stroke();
            x = x + frequency;
        } else if (y > 0 && x === width){
            ctx.moveTo(x,y);
            ctx.lineTo(width/2,hight/2);
            ctx.stroke();
            y = y - frequency;
        } else if (y === 0 && x > 0){
            ctx.moveTo(x,y);
            ctx.lineTo(width/2,hight/2);
            ctx.stroke();
            x = x - frequency;
        }



    }
    
}
toCenter(0,0);