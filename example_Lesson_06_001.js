function setup() {
  let button = createButton("Push!");
  //ボタン押下時にclicked関数実行
  button.mousePressed(clicked);
}

function draw() {
  
}

function clicked() {
  text("Pushed", 10, 10);
}