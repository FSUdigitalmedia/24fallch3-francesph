let x1 = 50;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 2; // speed in Y direction
let d1 = 100;      // diameter of the ball

let x2 = 50;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 4;  // speed in X direction
let y2Speed = 8; // speed in Y direction
let d2 = 100;      // diameter of the ball

let value1 = '#0000FF';
let value = '#00FF00';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); // try commenting this out!

  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > width || y1 < 0) {
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;

  
  fill(value1);
  ellipse(x1, y1, d1);

  //Green circle:
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > width || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;

  fill(value)
  ellipse(x2, y2, d2);
}

function mouseClicked() { //pressing key turns circle white or green
  if (value1 === '#0000FF') {
    value1 = '#FF00FF';
  } else {
    value1 = '#0000FF';
  }
}
function keyPressed() { //pressing key turns circle white or green
    if (value === '#00FF00') {
      value = '156, 192,203';
    } else {
      value = '#00FF00';
    }
  }