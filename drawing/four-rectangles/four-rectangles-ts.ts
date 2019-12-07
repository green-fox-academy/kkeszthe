'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function fourRectangles(x: number, y: number, w: number, h: number){
    
    for (let i: number = 0; i < 4; i++){
        ctx.fillStyle = "rgb(" + (Math.random()*255) + "," + (Math.random()*255) + "," + (Math.random()*255) + ")";
        ctx.fillRect(x,y,w,h);
        x=x+w;
        y=y+h;
        w=w*3/2;
        h=h*3/2;
    }
}

fourRectangles(0,0,50,50)