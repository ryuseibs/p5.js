let img;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < img.width; x++) {
      //ピクセル値を取り出す
      let c = img.set(x, y);
      if (red(c) === 255 && green(c) === 0 && blue(c) === 0) {
        //既存のピクセルをチェック
        img.set(x, y, color(0, 255, 0));
      } else {
        img.set(x, y, color(0, 0, 255));
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}

function draw() {
  
}