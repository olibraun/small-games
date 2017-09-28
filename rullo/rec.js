rec = function(x,y){
  this.pos = createVector(x,y);
  this.value = 12;

  this.show = function(){
    stroke(179, 179, 204);
    strokeWeight(3);
    noFill();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,50,50);

    fill(255);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    text(str(this.value),this.pos.x,this.pos.y);
  }
}
