function Block(i,j){
  this.spacing = 16;
  this.w = 40;
  this.h = 30;
  this.pos = createVector(i*(this.w+this.spacing)+this.spacing,j*(this.h+this.spacing)+this.spacing);

  this.show = function(){
    fill(145);
    noStroke();
    rect(this.pos.x,this.pos.y,this.w,this.h)
  }
}
