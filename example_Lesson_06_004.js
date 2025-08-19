let tl_slider, tr_slider, br_slider, bl_slider;

function setup() {
  tl_slider = createSlider(0, 40);
  tl_slider.position(width + 10, 0);
  tr_slider = createSlider(0, 40);
  tr_slider.position(width + 10, 20);
  br_slider = createSlider(0, 40);
  br_slider.position(width + 10, 40);
  bl_slider = createSlider(0, 40);
  bl_slider.position(width + 10, 60);
}

function draw() {
  let tl = tl_slider.value();
  let tr = tr_slider.value();
  let br = br_slider.value();
  let bl = bl_slider.value();
  background(220);
  rect(10, 10, 80, 80, tl, tr, br, bl);
}