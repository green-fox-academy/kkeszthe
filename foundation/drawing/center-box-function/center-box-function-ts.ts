'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

const w: number = 600, h: number = 400;
function centerBox (s: number){
   for (let i: number = 0; i <3; i++) {
       ctx.strokeRect(w/2-s/2,h/2-s/2,s,s);
        s = s*2
   }
}
centerBox(50)