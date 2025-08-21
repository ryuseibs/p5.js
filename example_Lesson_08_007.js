let camera;
//デフォルトで映像表示しないように設定
let capturing = true;

function setup() {
  noCanvas();
  camera = createCapture(VIDEO);
}

function draw() {
  
}

function mouseClicked() {
  if (capturing) {
    camera.pause();
  } else {
    camera.play();
  }
  capturing = !capturing;
}