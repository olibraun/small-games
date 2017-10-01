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
    this.rullo.show();
  }

  this.mouseAction = function(){
    this.rullo.mouseAction();
  }
}
