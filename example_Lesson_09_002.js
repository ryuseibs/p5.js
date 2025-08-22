let sound;

function preload() {
  sound = loadSound("Saikidousekai.m4a");
}

function setup() {
  sound.play();
}

function draw() {}

function mousePressed() {
  if (sound.isPlaying) {
    sound.pause();
  } else {
    sound.play();
  }
}