//マイクを管理する変数
let mic, rec, sfile;
let btn;

function setup() {
  mic = new p5.AudioIn();
  rec = new p5.SoundRecorder();
  sfile = new p5.SoundFile();
  noCanvas();
  btn = createButton("rec");
  btn.mousePressed(record);

  rec.setInput(mic);
  mic.start();
}

function record() {
  rec.record(sfile);
  btn.html("stop");
  btn.mousePressed(stop);
}

function stop() {
  rec.stop();
  mic.stop();
  btn.html("play");
  btn.mousePressed(play);
}

function play() {
  sfile.play();
}

function draw() {
  
}