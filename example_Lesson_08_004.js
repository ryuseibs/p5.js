let video;

function setup() {
  createCanvas(640, 360);
  video = createVideo("CHANEL_p5js.mp4");
  video.hide();
  video.play();
}

function draw() {
  video.loadPixels();
  let pixels = video.pixels;
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let i = (x + y * video.width) * 4;
      pixels[i + 0] = 255 - pixels[i + 0];
      pixels[i + 1] = 255 - pixels[i + 1];
      pixels[i + 2] = 255 - pixels[i + 2];
    }
  }
  video.updatePixels();
  image(video, 0, 0, width, height);
}