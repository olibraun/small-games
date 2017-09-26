//Sketch-Datei für Rullo

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var n;

function setup() {
  createCanvas(500,700);
  n = new num(120,120,1);
}

function draw() {
  background(51);
  n.show();
}

function mouseClicked(){
  console.log("F");
  n.switchActive();
}
