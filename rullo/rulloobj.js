rullo = function(){
  this.myGrid = make2DArray(7,7);
  this.x_offset = 38;
  this.y_offset = 65;

  //Initialize numbers into grid
  for(let i=1; i < 6; i++){
    for(let j=1; j < 6; j++){
      this.myGrid[i][j] = new num(i*70 + this.x_offset,j*70 + this.y_offset,floor(random(1,10)));
    }
  }
  //Initialize rectangles into grid
  //Top and bottom rows
  for(let i = 1; i < 6; i++){
    this.myGrid[i][0] = new rec(i*70 + this.x_offset,0*70 + this.y_offset);
    this.myGrid[i][6] = new rec(i*70 + this.x_offset,6*70 + this.y_offset);
  }
  //Left and right columns
  for(let j = 1; j < 6; j++){
    this.myGrid[0][j] = new rec(0*70 + this.x_offset,j*70 + this.y_offset);
    this.myGrid[6][j] = new rec(6*70 + this.x_offset,j*70 + this.y_offset);
  }

  this.show = function(){
    //Show numbers
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        this.myGrid[i][j].show();
      }
    }
    //Show rectangles
    for(let l = 1; l < 6; l++){
      this.myGrid[l][0].show();
      this.myGrid[l][6].show();
      this.myGrid[0][l].show();
      this.myGrid[6][l].show();
    }
  }

  this.mouseAction = function(){
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        if(this.myGrid[i][j].hits(mouseX,mouseY)){
          this.myGrid[i][j].switchActive();
        }
      }
    }
  }
}

function make2DArray(cols,rows){
  var arr = new Array(cols);
  for(var i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}
