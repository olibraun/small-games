gameManager = function(rullo){
  //Properties
  this.rullo = rullo;
  let won = false;
  let winOverlay = new winScreen();

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
      winOverlay.show();
    }
  }

  this.mouseAction = function(){
    if(!won){
      this.rullo.mouseAction();
    }else{
      this.rullo.initialize();
    }
  }
}
