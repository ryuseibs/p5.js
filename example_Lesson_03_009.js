function setup() {
  let points = [
    [10, 80],
    [30, 70],
    [50, 20],
    [70, 35],
    [90, 75]];
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];
    vertex(x, y);
  }
  endShape();
}

function draw() {
  
}