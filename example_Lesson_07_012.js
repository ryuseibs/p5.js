let img;
let x = 0, y = 0;

function preload() {
  img = createImg("img_bg_pc2.webp", "syn");
}

function setup() {
  //描画領域はなし
  noCanvas();
}

function draw() {
  img.position(x, y);
  x++;
  y++;
}