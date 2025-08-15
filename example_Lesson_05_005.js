let lx = 0, ly = 0, w = 0, h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(lx, ly, w, h);
}

function touchMoved() {
  //1本目の指の座標
  let x1 = touches[0].x;
  let y1 = touches[0].y;
  //2本目の指の座標
  let x2 = touches[1].x;
  let y2 = touches[1].y;
  //四角形を描画するための前処理
  if (x1 < x2) {
    lx = x1;
  } else {
    lx = x2;
  }
  if (y1 < y2) {
    ly = y1;
  } else {
    ly = y2;
  }
  //absは絶対値
  w = abs(x1 - x2);
  h = abs(y1 - y2);
  return false;
}