let video;

function setup() {
  createCanvas(640, 360);
  video = createVideo("CHANEL_p5js.mp4");
  video.hide();
  video.play();
}

function draw() {
  image(video, 0, 0, width, height);
  filter(INVERT);
}