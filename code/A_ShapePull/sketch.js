function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, 200, 0, 0.1);
  slider.value(2);
}

var inc = 0.5;
var noiseMax = 3;
var slider;
var phase = 0;
var zoff = 0;

function draw() {
  background(255);
  translate(width / 2, height / 2);
  noStroke(0);
  fill(220);
  noiseMax = slider.value();
  beginShape();
  for (let a = 0; a <= TWO_PI; a += inc) {
    // let xoff = map(cos(a), -1, 1, 0, noiseMax);
    // let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(a, zoff), 0, 1, 180 - noiseMax/2, 180 + noiseMax/2);
    let x = r * cos(a);
    let y = r * sin(a);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  
  zoff += 0.005;
}