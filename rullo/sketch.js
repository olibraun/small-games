//Sketch-Datei für Rullo
let R;

function setup() {
  createCanvas(500,700);
  R = new rullo;
}

function draw() {
  background(51);
  R.show();
}

function mouseClicked(){
  R.mouseAction();
}
