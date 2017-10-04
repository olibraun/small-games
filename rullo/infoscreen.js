infoScreen = function(){
  let txt = "";

  txt = txt + "RULLO CLONE" +"\n";
  txt = txt +"\n";
  txt = txt + "Ziel des Spiels ist [TO DO]"+"\n";
  txt = txt +"\n";
  txt = txt +"\n";
  txt = txt +"\n";
  txt = txt + "Bitte klicken Sie, um weiter zu spielen.";

  this.show = function(){
    fill(98, 155, 247);
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    textStyle(NORMAL);
    text(txt,width/2,height/2);
  }
}
