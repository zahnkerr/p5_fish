function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  fill(255);
  eye();
}

function eye() {
  var w = 50;
  push();
  translate(width/2, height/2);
  ellipse(0, 0, w);
  ellipse(0, 0, w - 5);
  var angle = TWO_PI/16;
  var offset = 35;
  for (var i = 0; i < 16; i++) {
    line(-(w - offset), -(w - offset), w - offset, w - offset);
    rotate(angle);
  }
  pop();
  fill(0);
  ellipse(0, 0, 10);
}
