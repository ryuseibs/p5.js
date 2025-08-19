function setup() {
  let cb = createCheckbox("塗り");
  cb.changed(checked);
  cb = createCheckbox("輪郭", true);
  cb.changed(checked);
}

function draw() {
  background(220);
  rect(10, 10, 10, 10);
}

function checked() {
  if (this.value() === "塗り") {
    fill(200);
  } else {
    noFill();
  }
  if (this.value() === "輪郭") {
    if (this.checked()) {
      stroke(9);
    } else {
      noStroke();
    }
  }
}