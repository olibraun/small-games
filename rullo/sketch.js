//Sketch-Datei für Rullo

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var n;
var myNumbers;
var offset;

function setup() {
  createCanvas(500,700);
  offset = 100;
  myNumbers = make2DArray(5,5);
  for(var i=0; i < 5; i++){
    for(var j=0; j < 5; j++){
      myNumbers[i][j] = new num(i*70 + offset,j*70 + offset,floor(random(1,10)));
    }
  }
}

function draw() {
  background(51);
  for(var i=0; i < 5; i++){
    for(var j=0; j < 5; j++){
      myNumbers[i][j].show();
    }
  }
}

function mouseClicked(){
  console.log(floor(random(1,10)));
  for(var i=0; i < 5; i++){
    for(var j=0; j < 5; j++){
      if(myNumbers[i][j].hits(mouseX,mouseY)){
        myNumbers[i][j].switchActive();
      }
    }
  }
}
