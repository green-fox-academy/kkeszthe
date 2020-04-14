'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]
let size: number = 10;
function steps3D(x: number, s: number, color: string){
    s = size
    for(let i: number = 0; i < 7; i++){
    ctx.strokeRect(x,x,s,s)
    ctx.fillStyle = color;
    ctx.fillRect(x,x,s,s);
        x=x+s;
        s=s + size;
       
    
}
}

steps3D(size,size,"purple");