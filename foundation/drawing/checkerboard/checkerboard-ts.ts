'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

const width: number = 600, height: number = 400;

function checkerboard(size: number){
    for(let i: number = 0; i < height/size; i++){
        for( let j: number = 0; j < width/size; j++){
            if(i%2 === 0){
                if(j%2 === 0){
                    ctx.fillRect(j*size,i*size,size,size)
                }
            } else {
                if(j%2 !== 0){
                    ctx.fillRect(j*size,i*size,size,size)
                }
            }
        }
    }

}

checkerboard(50);
