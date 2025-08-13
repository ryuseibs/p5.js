function setup() {
  createCanvas(400, 400);
  stroke(0);
  strokeWeight(20);
}

function draw() {
  
}

function mouseDragged(){
  line(pmouseX, pmouseY, mouseX, mouseY);
}