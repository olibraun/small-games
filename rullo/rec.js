rec = function(x,y){
  this.pos = createVector(x,y);

  this.show = function(){
    rect(this.pos.x,this.pos.y,10,10);
  }
}
