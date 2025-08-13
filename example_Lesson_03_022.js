let angle = 0;

function setup() {}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(radians(angle));
  triangle(0, -25, 25, 25, -25, 25);
  angle++;
  if (angle > 360) {
    angle = 0;
  }
}