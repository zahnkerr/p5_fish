//****************lots of little fish***********************
//var gridSize = 200;
var fishes = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  var numFish = 50;

  for(var i = 0; i < numFish; i++) {
    var x = random(-40, width - 40);
    //what is your goal here?
    //you are mapping i between (0 - numFish) to (-100 - (height - 50))
    //maybe my only confusion is the use of numFish (are you trying to create a grid still?)
    var y = map(i, 0, numFish, -100, height - 50);
    //do you want the fish to be smaller in the background and larger in fore?
    var diameter = i * 3;
    //I would push back the new fish, instead of assigning it to the index
    //OLD: fishes[i] = new Fish(x, y, diameter);
    fishes.push(new Fish(x, y, diameter));
  }
}

function draw() {
  background(197, 247, 243);
  for(var i = 0; i < fishes.length; i++) {
    fishes[i].update();
    fishes[i].display();
  }
}

function Fish(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;

  this.angle = random(0, TWO_PI);
  this.yoffset = 0.0;
  this.color = color(127, 46, 178);

  this.rand = [
    random(-1,1),
    random(-1,1),
    random(-1,1),
    random(-1,1),
    random(-1,1),
    random(-1,1)
  ];

  this.generateBody = function(){
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.diameter, this.diameter/2);
  }

  this.generateTail = function(type){
    var attach = [this.x - (this.diameter / 2), this.y];
    var sc = this.diameter / 5;

    switch(type){
      case "triangle":
        triangle(
          attach[0],
          attach[1],
          attach[0] - sc,
          attach[1] - sc,
          attach[0] - sc,
          attach[1] + sc
        );
        break;
      case "curly":
        noFill();

        push();
        bezier(
          attach[0],
          attach[1],
          attach[0] + (this.rand[0] * this.diameter),
          attach[1] + (this.rand[1] * this.diameter),
          attach[0] + (this.rand[2] * this.diameter),
          attach[1] + (this.rand[3] * this.diameter),
          attach[0] + (this.rand[4] * this.diameter),
          attach[1] + (this.rand[5] * this.diameter)
        );

        bezier(
          attach[0],
          attach[1],
          attach[0] + (this.rand[0] * this.diameter),
          attach[1] - (this.rand[1] * this.diameter),
          attach[0] + (this.rand[2] * this.diameter),
          attach[1] - (this.rand[3] * this.diameter),
          attach[0] + (this.rand[4] * this.diameter),
          attach[1] - (this.rand[5] * this.diameter)
        );
        pop();

        break;
      default:
        triangle(
          attach[0],
          attach[1],
          attach[0] - sc,
          attach[1] - sc,
          attach[0] - sc,
          attach[1] + sc
        );
    }

  }

  this.update = function() {
    this.angle += 0.05;
    this.yoffset = sin(this.angle) * 20;
  }

  this.display = function() {
    push();
    stroke(this.color);

    this.generateBody();
    this.generateTail("curly");

    pop();
  }
}
// function Fish(direction, position) {
//   this.size = random(5);
//   this.length = 30;
//   // this.color = color(random(255), 255, 255);
//   this.color = color(127, 46, 178);
//   this.speed = random(10);
//   this.direction = 0.7;
//   this.position = ([this.x], [this.y]);
//   this.x = random(width / 2);
//   this.y = random(height / 2);
//   this.fishBody = function() {
//     strokeWeight(.25);
//     ellipse(0, 0, 10, 5);
//     translate(-6.0, 0);
//     triangle(-1, -1, 1, 0, -1, 1);
//   }
//
//
//   function Fish(length) {
//     this.length = length;
//     this.scaliness = "%" + Math.random() * 100;
//   }
//
//   var storArr = [];
//   for(var i = 0; i < 100; i++) {
//     storArr.push(new Fish((Math.random() * 10)))
//   }
//   console.log(storArr)
//
//   // this.x = -random(width);
//   // this.y = -random(height);
//
//   // this.move = function() {
//   //   this.x += this.size;
//   //   this.y += this.size;
//
//     // if(this.x > width || this.y > height) {
//     //   this.x = -random(width);
//     //   this.y = -random(height);
//     // }
//   // }
//
//   this.drawFish = function() {
//     fill(this.color);
//     push();
//       translate(width / 2, height / 2);
//       scale(5);
//       strokeWeight(.25);
//       // ellipse(this.x, this.y, this.size * 2, this.size);
//       this.fishBody();
//       ellipse(9.5, -1, 1, 1);
//     pop();
//   }
//
//   // this.display = function() {
//   //   fill(this.color);
//   //   ellipse(this.x, this.y, this.size, this.size);
//   // }
// }
//
//
//
//
//
//   // for(var i = 0; i < numrows; i++) {
//   //   for(var j = 0; j < numcolumns; j++) {
//   //     fishes.push(new Fish(direction, [i, j]));
//   //   }
//   // }
// }
//
// function draw() {
//   background(197, 247, 243);
//
//   for(var i = 0; i < fishes.length; i++) {
//     new_x = this.x * gridSize;
//     new_y = this.y * gridSize;
//     fishes[i].position = [new_x, new_y];
//     fishes[i].drawFish();
//   }
//
//   // for(var i = 0; i < fishes.length; i++){
//   //   //fishes[i].move();
//   //   fishes[i].drawFish();
//   // }
// }
//
// window.onresize = function() {
// 	setup();
// }
//
// // function drawFish1(x, y) {
// //   var c1 = color(244, 223, random(66));
// //   fill(c1);
// //   push();
// //     translate(x * gridSize, y * gridSize);
// //     scale(5);
// //     fishBody();
// //
// //   pop();
// // }
// //
// // function drawFish2(x, y) {
// //   var c2 = color(61, 198, 100);
// //   fill(c2);
// //   push();
// //     translate(x + (x + 0.5) * gridSize, y + (y + 0.5) * gridSize);
// //     scale(-5);
// //     fishBody();
// //     ellipse(9.5, 1, 1, 1);
// //   pop();
// // }
// //
// // function drawFish3(x, y) {
// //   var c3 = color(58, 58, 193);
// //   fill(c3);
// //   push();
// //     translate(x + (x + 0.25) * gridSize, y + (y + 0.25) * gridSize);
// //     scale(3);
// //     fishBody();
// //     ellipse(9.5, -1, 1, 1);
// //   pop();
// // }
// //
// // function drawFish4(x, y) {
// //   var c4 = color(117, 29, 50);
// //   fill(c4);
// //   push();
// //     translate(x + (x + 0.75) * gridSize, y + (y + 0.75) * gridSize);
// //     scale(-3);
// //     fishBody();
// //     ellipse(9.5, 1, 1, 1);
// //   pop();
// // }
// //
// //
// // function generateScales(size, x, y) {
// //   scale(size);
// //   ellipse(0, 0, 10, 5);
// // }
// //
// // function generateDiamond(size) {
// //   scale(size);
// //   //rect()
// // }
