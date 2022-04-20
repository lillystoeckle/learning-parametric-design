let boxSize = 10;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);  
  frameRate (2);
}

function draw() {
    strokeWeight(0);
  
    for (let x = 0; x < width; x+=boxSize){
    for (let y = 0; y < height; y+=boxSize){
      fill(random(255));
      rect(x,y,boxSize,boxSize)
    }
  }
}