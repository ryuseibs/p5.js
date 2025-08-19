function setup() {
  let button = createButton("押して");
  button.mousePressed(clicked);
}

function draw() {
  
}

function clicked() {
  text("押された", 10, 50);
}