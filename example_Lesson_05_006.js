function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(80);
}

function draw() {
  background(220);
  if (deviceOrientation === "portrait") {
    text("縦です", 10, 100);
  } else if (deviceOrientation === "landscape") {
    text("横です", 10, 100);
  } else {
    text("未定義", 10, 100);
  }
}