function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  strokeWeight(20);
  background(200);
}

function draw() {
  
}

function touchMoved() {
  line(pmouseX, pmouseY, mouseX, mouseY);
  return false;
}