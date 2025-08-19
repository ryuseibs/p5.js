let gray = 0;
let button;

function setup() {
  button = createButton(str(gray));
  button.mousePressed(clicked);
  background(gray);
}

function draw() {
  
}

function clicked() {
  gray += 2;
  button.html(gray);
  background(gray);
}