function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(20);
}

function draw() {
  
}

function touchStarted() {
  text("こんにちは", mouseX, mouseY);
  return false;
}