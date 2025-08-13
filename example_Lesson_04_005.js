function setup() {
  background(220);
}

function draw() {
  if (mouseX < width / 2) {
    //十字のカーソル
    cursor(MOVE);
  } else {
    //手のカーソル
    cursor(HAND);
  }
}