let img;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);

  //ピクセルRGB値を表示
  let c = img.get(0, 0);
  print(c[0], c[1], c[2]);
}

function draw() {
  
}