let centerX = 300;     // center of the circle (x)
let centerY = 200;     // center of the circle (y)
let radius = 150;      // distance from center to the dot
let angle = 0;         // current angle in radians
let speed = 0.03;      // how much the angle grows each frame
let paused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20, 24, 38);

  // Make the angle bigger each frame (unless paused)
  if (!paused) {
    angle = angle + speed;
  }

  // Formula for x & y
  let dotX = centerX + radius * cos(angle);
  let dotY = centerY + radius * sin(angle);

  // Formula for rotation
  let fullRotations = floor(angle / TWO_PI);

  // Draw the path, the radius line, and the dot
  noFill();
  // Tangerine orbit circle
  stroke(255, 153, 51);
  strokeWeight(3);
  circle(centerX, centerY, radius * 2);

  // Tangerine radius line
  stroke(255, 153, 51);
  strokeWeight(2);
  line(centerX, centerY, dotX, dotY);

// Moving dot
  noStroke();
  fill(0, 0, 0);
  circle(dotX, dotY, 24);

  // Instructions
  fill(255);
  textSize(14);
  text('SPACE: pause   UP/DOWN: change speed', 10, 20);
  text('full rotations = ' + fullRotations, 10, 340);
  text('angle = ' + nf(degrees(angle) % 360, 1, 1) + ' deg', 10, 360);
  text('x = ' + nf(dotX, 1, 2) + '   y = ' + nf(dotY, 1, 2), 10, 380);
}

function keyPressed() {
  if (key === ' ') {
    paused = !paused;
  }
  if (keyCode === UP_ARROW) {
    speed = speed + 0.005;
  }
  if (keyCode === DOWN_ARROW) {
    speed = max(speed - 0.005, 0);
  }
  return false; // stop page scrolling
}
