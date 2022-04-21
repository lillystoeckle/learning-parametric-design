function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  frameRate (5);

  background('rgba(214, 221, 255, 100)');

  let xpos = random(width);
  let ypos = random(height);

  rect(xpos, ypos, 200, 100);s
    fill('rgba(107, 122, 255, 100)');
    strokeWeight(0);
}