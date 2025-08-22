//マイクを管理する変数
let mic;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
  level = mic.getLevel();
  ellipse(width / 2, height / 2, level * width + 10, level * height + 10);
}