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

  //Rechteck Querformat

  let xpos = random(width);
  let ypos = random(height);

  rect(xpos, ypos, 200, 100);
    fill('rgba(107, 122, 255, 0.5)');
    strokeWeight(0);
}