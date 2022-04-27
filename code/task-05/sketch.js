const sketchWidth = 400;
const sketchHeight = 400;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate (5);
}

function draw() {
  background('rgba(214, 221, 255, 100)');

  //Circle
  
  fill('rgba(200, 2200, 200, 100)');
  strokeWeight(0);
  circle (200, 200, 40);

  //Rotorblatt 1

  stroke('rgba(200, 2200, 200, 100)')
  strokeWeight(2);
  beginShape();

  for(let angle = 0; angle < 360; angle += 90) {
    const radius = (200, 150);
    const iradius = 21;

    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);

    const ix = iradius * cos(Math.PI / 180 * angle);
    const iy = iradius * sin(Math.PI / 180 * angle);
    
    line(x + 200, y + 200, ix +200, iy+200);
  }
  endShape();

}