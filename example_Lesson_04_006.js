let x = 0, y = 50;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  
}

function keyTyped() {
  text(key, x, y);
  x += textWidth(key);
}