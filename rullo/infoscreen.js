infoScreen = function(){
  this.show = function(){
    fill(98, 155, 247);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(35);
    textStyle(NORMAL);
    text("Infotext",width/2,height/2);
  }
}
