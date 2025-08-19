function setup() {
  let canvas = createCanvas(150, 50);
  canvas.drop(getFile);
  background(220);
}

function draw() {
  
}

function getFile(file) {
  if (file.type === "image") {
    createImg(file.data);
  } else {
    // Do Nothing
  }
}