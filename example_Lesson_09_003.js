let sound;
let s_v, s_r, s_j;
let c = 0;

function preload() {
  sound = loadSound("Saikidousekai.m4a");
}

function setup() {
  createCanvas(300, 30);
  s_v = createSlider(0, 1, 1, 0.01);
  s_r = createSlider(0, 2, 1, 0.01);
  s_j = createSlider(0, sound.duration(), 0, 0.01);
  sound.play();
}

function draw() {
  text("音量、速度、再生位置", 0, 25);
  sound.setVolume(s_v.value());
  sound.rate(s_r.value());
  if (c != s_j.value()) {
    c = s_j.value();
    sound.jump(c);
  }
}