var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.4;
var pg;
var gen = 0;

// Dimensions of barrier
var rx = 150;
var ry = 300;
var rw = 500;
var rh = 50;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  genP = createP();
  /*
  t = createElement()
    .html("<h3>Other Attributes</h3> Max Force: ")
    .style("color:#fff");
  maxForceI = createInput();
*/
  pg = createGraphics(800, 600);
  target = createVector(width / 4, 50);
  console.log(mouseX);
}

function mouseClicked() {
  //change target position when clicked
  target = createVector(mouseX, mouseY);
  // prevent default
  return false;
}

function draw() {
  population.run();

  // Displays count to window
  lifeP.html("Timestamp: " + count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    gen++;
    genP.html("Genaration: " + gen);
    count = 0;
  }

  fill(0, 12);
  rect(0, 0, width, height);
  // Renders barrier for rockets
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 32, 32);

  strokeWeight(0);
  //trails
  pg.background(0);
  pg.noFill();
  pg.stroke(200);
  //Draw the offscreen buffer to the screen with image()
  image(pg);
}
