let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  fill("red");
  setMoveThreshold(0.05);
}

function draw() {
  background(255);
  ellipse(x, y, 80, 80);
}

function deviceMoved() {
  x += rotationX;
  y += rotationY;
  if (x < 0) {
    x = 0;
  }
  if (x > windowWidth) {
    x = windowWidth;
  }
  if (y < 0) {
    y = 0;
  }
  if (y > windowHeight) {
    y = windowHeight;
  }
}