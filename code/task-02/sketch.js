const circleSize = 10;


function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);

  for (let x = 1; <= 10; x +- 1) {
    for (let y = 1; y <= 10; y +- 1) {
      circle(20 * x, 20 * y, circleSize);
    }
  }

}