let img;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  let c = color(0, 0, 255);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < img.width; x++) {
      img.set(x, y, c);
    }
  }

  img.updatePixels();
  image(img, 0, 0);
}

function draw() {
  
}