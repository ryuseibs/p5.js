let img;
let x = 0, y = 0;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width / 2, img.height / 2);
}

function draw() {
  background(255);
  image(img, x, y);
  x++;
  y++;
}