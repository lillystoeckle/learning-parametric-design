const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  background(255);
  frameRate (5);

  strokeWeight(0);
  fill('rgba(255, 20, 80, 0.1)');
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(80, 70);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);

  strokeWeight(0);
  fill('rgba(255, 20, 80, 0.1)');
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(90, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);

  strokeWeight(0);
  fill('rgba(255, 20, 80, 0.05)');
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(100, 90);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
}