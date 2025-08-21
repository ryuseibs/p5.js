let camera;

function setup() {
  createCanvas(320, 240);
  camera = createCapture(VIDEO);
  camera.hide();
}

function draw() {
  image(camera, 0, 0, width, height);
  filter(INVERT);
}