let dropdown;

function setup() {
  let dropdown = createSelect();
  dropdown.option("太さ1", 1);
  dropdown.option("太さ4", 4);
  dropdown.option("太さ6", 6);
  dropdown.selected(6);
  dropdown.position(width + 10, 0);
  strokeWeight(dropdown.selected());

  dropdown.changed(selected);
}

function draw() {
  background(220);
  ellipse(width / 2, height / 2, 50, 50);
}

function selected() {
  strokeWeight(dropdown.selected());
}