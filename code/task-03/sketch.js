const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw(){
  background(255);

  strokeWeight(0);
  fill('rgba(255, 20, 80, 0.1)');
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(150, 140);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
  noLoop();

  strokeWeight(0);
  fill('rgba(255, 20, 80, 0.1)');
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(160, 150);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
  noLoop();

  strokeWeight(0);
  fill('rgba(255, 20, 80, 0.05)');
  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(170, 160);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + sketchWidth / 2, y + sketchHeight / 2);
  }
  endShape(CLOSE);
  noLoop();
}