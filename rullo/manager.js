gameManager = function(rullo){
  //Properties
  this.rullo = rullo;
  let won = false;

  //Setup
  this.rullo.initialize();

  this.update = function(){
    this.rullo.update();
    won = this.rullo.isRulloWon();
  }

  this.show = function(){
    if(!won){
      this.rullo.show();
    }else{
      rectMode(CENTER);
      noStroke();
      fill(0,255,0);
      rect(width/2,height/2,50,50);
    }
  }

  this.mouseAction = function(){
    this.rullo.mouseAction();
  }
}
