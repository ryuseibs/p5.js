let sound;
//解析器
let amp;

function preload() {
  sound = loadSound("Saikidousekai.m4a");
}

function setup() {
  createCanvas(400, 400);
  //解析器を作成
  amp = new p5.Amplitude();
  //解析するサウンドファイルを渡す
  amp.setInput(sound);
  sound.play();
}

function draw() {
  background(220);
  //入力された音のレベルを調べる
  let level = amp.getLevel();
  ellipse(width / 2, height / 2, level * width + 10, level * height + 10);
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}