let count = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(width / 4);
}

function draw() {
  background(220);
  text(count, (width - textWidth(count)) / 2, height / 2);
}

function deviceShaken() {
  count++;
}