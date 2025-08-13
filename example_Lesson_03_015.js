let x = 0;

function setup() {
  frameRate(1);
}

function draw() {
  background(255);
  rect(x, x, 30, 30);
  x++;
  if (x > height) {
    x = 0;
  }
}