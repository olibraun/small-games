function Block(){
  this.pos = createVector(width/2,height/2);
  this.w = 40;
  this.h = 30;

  this.show = function(){
    fill(251);
    noStroke();
    rect(this.pos.x,this.pos.y,this.w,this.h)
  }
}
