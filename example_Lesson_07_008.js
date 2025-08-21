let img;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < img.width; x++) {
      //ピクセルを取り出す
      let c = img.get(x, y);
      //ピクセル値の赤を反転
      let r = 255 - red(c);
      //ピクセル値の緑を反転
      let g = 255 - green(c);
      //ピクセル値の青を反転
      let b = 255 - blue(c);
      //反転した色を設定
      img.set(x, y, color(r, g, b));
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}

function draw() {
  
}