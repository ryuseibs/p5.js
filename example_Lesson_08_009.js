let camera;

function setup() {
  createCanvas(320, 240);
  camera = createCapture(VIDEO);
  camera.hide();
}

function draw() {
  camera.loadPixels();
  let pixels = camera.pixels;
  for (let y = 0; y < camera.height; y++) {
    for (let x = 0; x < camera.width; x++) {
      let i = (x + y * camera.width) * 4;
      pixels[i + 0] = 255 - pixels[i + 0];
      pixels[i + 1] = 255 - pixels[i + 1];
      pixels[i + 2] = 255 - pixels[i + 2];
    }
  }
  camera.updatePixels();
  image(camera, 0, 0, width, height);
}