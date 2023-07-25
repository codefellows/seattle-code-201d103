'use strict';

let canvasElement = document.getElementById('canvas-element');

// define the drawing context of our canvas.
let context = canvasElement.getContext('2d');

context.rect(10, 100, 200, 300);

context.fillStyle = '#8ED6FF';
context.fill();
// now we can draw
// context.moveTo(100, 0);
// context.lineTo(500, 500);
// context.stroke();


// // drawing a new line.
// context.moveTo(500, 0);
// context.lineTo(0, 100);
// context.stroke();

function createX(width) {
  context.moveTo(0, 0);
  context.lineTo(500, 500);
  // context.stroke(); // adds the color

  // drawing a new line.
  context.moveTo(500, 0);
  context.lineTo(0, 500);
  context.stroke();
}

createX();
context.strokeStyle = 'red';
context.stroke(); // adds the thickness and color to the things drawn, add once per canvase
