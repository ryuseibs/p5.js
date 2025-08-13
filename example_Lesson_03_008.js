function setup() {
  let x = 50,
    y = 50;

  noStroke();
  fill(100, 100, 255);
  ellipse(x, y, 25, 20);
  ellipse(x, y + 25, 20, 40);
  triangle(x - 10, y - 5, x - 5, y - 17, x - 2, y - 9);
  triangle(x + 10, y - 5, x + 5, y - 17, x + 2, y - 9);
  quad(x - 10, y + 10, x - 30, y + 15, x - 20, y + 25, x - 5, y + 25);
  quad(x + 10, y + 10, x + 30, y + 15, x + 20, y + 25, x + 5, y + 25);
  fill(255, 0, 0, 70);
  ellipse(x, y, 15, 13);
  ellipse(x, y + 20, 13, 27);
}

function draw() {
  
}