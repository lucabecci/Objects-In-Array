let ells = [];

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i<90; i++){
    let x = random(0,400);
    let y = random(0,400);
    ells[i] = new Ell(x,y,30)
  }
}

function draw() {
  background(0);
  for(i = 0; i < ells.length; i++){
    ells[i].show();
    ells[i].move();
  }
}

class Ell{
  constructor(tempX,tempY,tempDiameter){
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
  }

  show(){
    noStroke()
    fill(230,0,100,10);
    ellipse(this.x,this.y,this.diameter * 2);
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }
}
