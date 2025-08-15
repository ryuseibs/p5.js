function setup() {
  createCanvas(400, 400);
  fill(0);
  background(220);
}

function draw() {
  
}

function touchMoved() {
  ellipse(mouseX, mouseY, 20, 20);
  return false;
}