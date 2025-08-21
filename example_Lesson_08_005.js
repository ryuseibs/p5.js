let media = null;

function setup() {
  let canvas = createCanvas(640, 360);
  canvas.drop(getFile);
  background(200);
  text("Select File", 10, height / 2);
  noLoop();
}

function draw() {
  if (media != null) {
    image(media, 0, 0, width, height);
  }
}

function getFile(file) {
  if (file.type === "video") {
    media = createVideo(file.data);
    media.play();
    media.hide();
    loop();
  } else if (file.type === "image") {
    media = createImg(file.data);
    media.hide();
    redraw();
  }
}