let img;

function preload() {
  img = createImg("img_bg_pc2.webp", "syn");
}

function setup() {
  //描画領域はなし
  createCanvas(640, 320);
  //createImgの画像を表示しない
  img.hide();
  image(img, 0, 0);
}

function draw() {

}