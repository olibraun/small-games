//Sketch-Datei für Rullo
let R;

function setup() {
  createCanvas(500,700);
  R = new rullo;
  R.initialize();
}

function draw() {
  background(51);
  R.update();
  R.show();
}

function mouseClicked(){
  R.mouseAction();
}
