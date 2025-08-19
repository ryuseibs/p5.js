let radio;

function setup() {
  radio = createRadio();
  radio.option("赤");
  radio.option("緑");
  radio.option("青");
  radio.selected("赤");
}

function draw() {
  if (radio.value() === "赤") {
    background(255, 0, 0);
  } else if (radio.value() === "青") {
    background(0, 0, 255);
  } else {
    background(0, 255, 0);
  }
}