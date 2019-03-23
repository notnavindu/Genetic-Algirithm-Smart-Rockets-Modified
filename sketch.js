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
var maxforce = 0.5;
var pg;

// Dimensions of barrier
var rx = 150;
var ry = 300;
var rw = 700;
var rh = 50;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  pg = createGraphics(800, 600);
  target = createVector(width / 4, 50);
}

function draw() {
  population.run();

  // Displays count to window
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }

  fill(0, 12);
  rect(0, 0, width, height);
  // Renders barrier for rockets
  fill(255);

  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 32, 32);

  //trails
  pg.background(0);
  pg.noFill();
  pg.stroke(200);
  //Draw the offscreen buffer to the screen with image()
  image(pg);
}
