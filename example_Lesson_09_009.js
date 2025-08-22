let osc;

function setup() {
  osc = new p5.Oscillator();
  background(220);
}

function draw() {
  
}

function mouseClicked() {
  osc.start();
  osc.amp(mouseX, mouseY);
  osc.freq(700);
  osc.freq(60, 0.7);
}