var fishes = [];

function Fish(direction, position){
  this.size =

  this.direction =

  this.position =

  this.species

  this.drawFish = function(){
    //draw fish body
    //translate to new this.position
  }

  this.generateBody = function(){
    switch(this.species){
      case "Anchovy":
        //shape of anchovy
        break;
      case "Trout":
        //shape of trout
    }
  }
}

function setup(){
  for(var i = 0; i < numrows; i++){
    for(var j = 0; i < numcolumns; j++){
      fishes.push(new Fish(direction, [i,j]));
    }
  }
}

function draw(){
  for(var i = 0; i < fishes.length; i++){
    new_x

    fishes[i].position = [new_x, new_y];
    fishes[i].drawFish();
  }
