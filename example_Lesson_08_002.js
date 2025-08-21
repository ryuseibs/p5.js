let video;
let playing = false;

function setup() {
  noCanvas();
  video = createVideo("CHANEL_p5js.mp4");
}

function draw() {
  
}

function mouseClicked() {
  if (playing) {
    video.pause();
  } else {
    video.play();
  }
  playing = !playing;
}