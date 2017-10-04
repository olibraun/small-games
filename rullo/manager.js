gameManager = function(){
  //Properties
  let R = new rullo();
  let won = false;
  let winOverlay = new winScreen();
  this.info = new infoButton();
  this.infoOverlay = new infoScreen();

  this.screenState = "GAME";

  //Setup
  R.initialize();

  this.update = function(){
    R.update();
    if(R.isRulloWon()){
      this.screenState = "WON";
    }
  }

  this.show = function(){
    switch(this.screenState){
      case "GAME":
        R.show();
        this.info.show();
        break;

      case "WON":
        winOverlay.show();
        break;

      case "INFO":
        this.infoOverlay.show();
        break;
    }
  }

  this.mouseAction = function(){
    switch(this.screenState){
      case "GAME":
        R.mouseAction();
        this.screenState = this.info.hits(mouseX,mouseY) ? "INFO" : "GAME";
        break;

      case "WON":
        R.initialize();
        this.screenState = "GAME";
        break;

      case "INFO":
        this.screenState = "GAME";
        break;
    }
  }
}
