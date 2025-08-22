let sound;
let radio;

function preload() {
  sound = loadSound("Saikidousekai.m4a");
}

function setup() {
  noCanvas();
  radio = createRadio();
  radio.option("restart");
  //前の再生に重なって再生
  radio.option("sustain");
  radio.selected("restart");
}

function draw() {
    
}

function mouseClicked() {
  if (radio.value() === "sustain") {
    sound.playMode("sustain");
  } else {
    sound.playMode("restart");
  }
  sound.play();
}