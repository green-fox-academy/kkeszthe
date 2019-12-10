'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
function steps(size: number, color: string){
    for(let i: number = 0; i < 20; i++){
    ctx.strokeRect(i*size,i*size,size,size)
    ctx.fillStyle = color;
    ctx.fillRect(i*size,i*size,size,size);
    
}
}

steps(20,"purple");
