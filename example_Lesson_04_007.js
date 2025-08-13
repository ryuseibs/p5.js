let x = 160, y = 120;

function setup() {
  createCanvas(400, 400);
  fill(0);
  ellipse(x, y, 20, 20);
}

function draw() {
  
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    y -= 1;
  }
  if (keyCode == DOWN_ARROW) {
    y += 1;
  }
  if (keyCode == LEFT_ARROW) {
    x -= 1;
  }
  if (keyCode == RIGHT_ARROW) {
    x += 1;
  }
  ellipse(x, y, 20, 20);
}