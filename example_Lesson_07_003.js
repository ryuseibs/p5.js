let img;
let copy;

function preload() {
  img = loadImage("img_bg_pc2.webp");
}

function setup() {
  createCanvas(img.width, img.height);
  copy = img.get();
}

function draw() {
  image(copy, 0, 0);
}

function keyType() {
  copy = img.get();
  if (key == "i") {
    //色反転
    copy.filter(INVERT);
  }
  if (key == "t") {
    //2値化
    copy.filter(THRESHOLD, 0.5);
  }
  if (key == "g") {
    //グレースケール化
    copy.filter(GRAY);
  }
  if (key == "b") {
    //平滑化
    copy.filter(BLUR, 3);
  }
  if (key == "d") {
    //膨張
    copy.filter(DILATE);
  }
  if (key == "e") {
    //収縮
    copy.filter(ERODE);
  }
  if (key == "p") {
    //階調変換
    copy.filter(POSTERIZE, 3);
  }
}