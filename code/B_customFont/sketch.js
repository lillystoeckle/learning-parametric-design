// Create an array (which is basically a list) of all your fonts, separated by commas. 
var fonts = ["Comic Sans MS", "Futura", "Courier New", "Montserrat", "Didot"];

//'index' refers to the items within your array and starts at 0. In this case, 0 = Comic Sans MS, 1 = Futura, 2 = Courier New, etc...
var index;

function setup() {
  createCanvas(400, 400);
  
  //Making the text size larger and centering the text.
  textSize(20);
  textAlign(CENTER);

  //Everytime the program is run, it will randomize the 'index' variable I created above between 0 and 4.
  index = round(random(0, 4));
}

function draw() {
  background(255);

  //The textFont will then be determined by which random value (between 0-4) was assigned to 'index' above.
  textFont(fonts[index]);

  //Displaying the text
  text("random font by reload", 200, 200);
  
  //I am displaying the index value below the text for your reference
  text(index, 200, 250);
}