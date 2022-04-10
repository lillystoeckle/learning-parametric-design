function preload(){
  // preload assets
}

function setup() {
  pixelDensity (1);
  createCanvas(400, 400, SVG);
}

function draw() {
  background(255);
  background(`#EFE6DD`);

  fill(`#D0947A`);
  strokeWeight(0);
  arc(
    170, 160,
    300, 300,
    Math.PI / 180 * 180,
    Math.PI / 180 * 0,
    OPEN
  );

  fill(`#D0947A`);
  strokeWeight(0);
  rect(20, 150, 300, 300);

  fill(`#E5D5C6`);
  strokeWeight(0);
  circle (120, 220, 100);
  
  fill(`#E5D5C6`);
  strokeWeight(0);
  arc(
    120, 330,
    100, 100,
    Math.PI / 180 * 180,
    Math.PI / 180 * 0,
    OPEN
  );

  fill(`#E5D5C6`);
  strokeWeight(0);
  rect(70, 330, 100, 100);

  fill(`#E7B7A0`);
  strokeWeight(0);
  arc(
    290, 200,
    140, 140,
    Math.PI / 180 * 180,
    Math.PI / 180 * 0,
    OPEN
  );

  fill(`#E7B7A0`);
  strokeWeight(0);
  rect(220, 200, 140, 200);
}