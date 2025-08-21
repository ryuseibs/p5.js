let img;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);

  img.loadPixels();
  let pixels = img.pixels;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < img.width; x++) {
      //配列の添え字を計算
      let i = (x + y * img.width) * 4;
      pixels[i + 0] = 255 - pixels[i + 0];
      pixels[i + 1] = 255 - pixels[i + 1];
      pixels[i + 2] = 255 - pixels[i + 2];
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}

function draw() {
  
}