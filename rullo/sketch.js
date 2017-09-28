//Sketch-Datei für Rullo

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

var n;
var myGrid;
var myRec;
var x_offset;
var y_offset;

function setup() {
  createCanvas(500,700);
  x_offset = 38;
  y_offset = 65;
  myGrid = make2DArray(7,7);
  //Initialize numbers into grid
  for(let i=1; i < 6; i++){
    for(let j=1; j < 6; j++){
      myGrid[i][j] = new num(i*70 + x_offset,j*70 + y_offset,floor(random(1,10)));
    }
  }
  //Initialize rectangles into grid
  //Top and bottom rows
  for(let i = 1; i < 6; i++){
    myGrid[i][0] = new rec(i*70 + x_offset,0*70 + y_offset);
    myGrid[i][6] = new rec(i*70 + x_offset,6*70 + y_offset);
  }
  //Left and right columns
  for(let j = 1; j < 6; j++){
    myGrid[0][j] = new rec(0*70 + x_offset,j*70 + y_offset);
    myGrid[6][j] = new rec(6*70 + x_offset,j*70 + y_offset);
  }
}

function draw() {
  background(51);
  //Show numbers
  for(let i=1; i < 6; i++){
    for(let j=1; j < 6; j++){
      myGrid[i][j].show();
    }
  }
  //Show rectangles
  for(let l = 1; l < 6; l++){
    myGrid[l][0].show();
    myGrid[l][6].show();
    myGrid[0][l].show();
    myGrid[6][l].show();
  }
}

function mouseClicked(){
  //console.log(floor(random(1,10)));
  for(let i=1; i < 6; i++){
    for(let j=1; j < 6; j++){
      if(myGrid[i][j].hits(mouseX,mouseY)){
        myGrid[i][j].switchActive();
      }
    }
  }
}
