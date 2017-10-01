//Sketch-Datei für Rullo
let R;
let manager;

function setup() {
  createCanvas(500,700);
  R = new rullo;
  manager = new gameManager(R);
}

function draw() {
  background(51);
  manager.update();
  manager.show();
}

function mouseClicked(){
  manager.mouseAction();
}
