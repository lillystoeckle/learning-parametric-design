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

  let xpos = random(0, width);
  let ypos = random(0, height);

  rect(xpos, ypos, 200, 100);
    fill('rgba(107, 122, 255, 0.5)');
    strokeWeight(0);

//Random Hoch- und Querformat?
// Warum selbe "random "x und y Koordinaten wenn code dubliziert?
}