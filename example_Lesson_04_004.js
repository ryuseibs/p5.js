let x = 160, y = 120;
function setup() {
  createCanvas(400, 400);
  fill(0);
  ellipse(x, y, 20, 20);
}

function draw() {
  
}

function mouseWheel(event) {
  //丸の位置変更
  y += event.delta;
  ellipse(x, y, 20, 20);
}