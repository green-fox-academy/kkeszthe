'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

const w: number = 600, h: number = 400;
let color: string [] = ["red", "orange", "yellow", "green","blue","purple","violet"]
function rainbowBox (s: number, c: string){
    let newColor: string[] = color.slice(color.indexOf(c),color.length); 
    
    if(color.indexOf(c) > 0){
        for(let j: number = 0; j < color.indexOf(c); j++){
            newColor.push(color[j]);
        };
    }
    console.log(newColor)
   for (let i: number = color.length; i > 0; i--) {
        ctx.fillStyle = newColor[i-1];
        ctx.fillRect(w/2-i*s/2,h/2-i*s/2,i*s,i*s);
        
   }
}
rainbowBox(50,"yellow")