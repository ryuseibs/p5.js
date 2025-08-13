function setup() {
  translate(50, 50);

  noStroke();
  fill(180, 180, 255);
  ellipse(0, 0, 25, 20);
  ellipse(0, 25, 20, 40);
  triangle(-10, -5, -5, -17, -2, -9);
  triangle(10, -5, 5, -17, 2, -9);
  quad(-10, 10, -30, 15, -20, +25, -5, 25);
  quad(10, 10, 30, 15, 20, 25, 5, 25);
  fill(255, 0, 0, 70);
  ellipse(0, 0, 15, 13);
  ellipse(0, 20, 13, 27);
}

function draw() {
  
}