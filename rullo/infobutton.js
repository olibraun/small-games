infoButton = function(){
  this.pos = createVector(width-70,height-70);
  this.diameter = 50;

  this.show = function(){
    noStroke();
    fill(98, 155, 247);
    ellipse(this.pos.x,this.pos.y,this.diameter,this.diameter);
    fill(255);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(25);
    textStyle(ITALIC);
    text("i",this.pos.x,this.pos.y);
  }

  this.hits = function(x,y){
    if(pow(this.pos.x - x,2) + pow(this.pos.y - y,2) <= pow(this.diameter/2,2)){
      return true;
    }else{
      return false;
    }
  }
}
