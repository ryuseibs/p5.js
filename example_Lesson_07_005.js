let img;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
}

function draw() {
  
}

function mouseClicked() {
  let c = img.get(mouseX, mouseY);
  print(red(c), green(c), blue(c));
}