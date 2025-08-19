let input;

function setup() {
  input = createInput();
  let button = createButton("実行");
  button.mousePressed(clicked);
}

function draw() {}

function clicked() {
  background(255);
  let cmd = input.value();
  if (cmd === "長方形") {
    rect(10, 10, 80, 80);
  } else if (cmd == "円") {
    ellipse(50, 50, 70, 70);
  } else {
    text(cmd, 10, height / 2);
  }
}