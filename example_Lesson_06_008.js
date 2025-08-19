function setup() {
  noCanvas();
  createFileInput(getFile);
}

function draw() {
  
}

function getFile(file) {
  if (file.type === "image") {
    createImg(file.data);
  } else {
  print("ファイルを選択してください");
  }
}