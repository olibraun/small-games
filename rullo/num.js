num = function(x,y,value){
  this.pos = createVector(x,y);
  this.radius = 50;

  this.value = value;

  this.active = true;
  this.locked = false;

  this.show = function(){
    if(this.active){
      fill(255, 153, 0);
    }else{
      fill(179, 179, 204);
    }
    if(this.locked){
      stroke(255, 255, 0);
      strokeWeight(4);
    }else{
      noStroke();
    }
    ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
    fill(255);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    text(str(value),this.pos.x,this.pos.y);
  }

  this.switchActive = function(){
    if(!this.locked){
      this.active = !this.active;
    }
  }

  this.switchLocked = function(){
    this.locked = !this.locked;
  }
}
