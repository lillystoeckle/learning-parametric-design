let color1;
let color2;
let color3;
let color4;

function setup() {
}

function draw(){

  color1 = color(random(200, 60), 255, 50);
  color2 = color(random(255, 50), 20, 255);
  color3 = color(random(50, 255), 255, 50);
  color4 = color(random(50, 200), 70, 255);
  createCanvas(400,400);


  background(255);

  noStroke();
  
  fill(color1);
  rect(0, 0, 200, 200);

  fill(color2);
  rect(200, 0, 200, 200);

  fill(color3);
  rect(200, 200, 200, 200);

  fill(color4);
  rect(0, 200, 200, 200);
}
