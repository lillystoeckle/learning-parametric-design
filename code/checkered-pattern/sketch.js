function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(178, 130, 250);
  fill(202, 242, 70);
  noStroke();
  
  for (let x = 0; x < width; x = x + 50) {
    for (let y = 0; y < height; y = y + 50) {
      rect(x, y, 25, 25);
    }
  }
  for (let x = 25; x < width; x = x + 50) {
    for (let y = 25; y < height; y = y + 50) {
      rect(x, y, 25, 25);
    }
  }
}