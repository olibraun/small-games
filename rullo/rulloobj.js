rullo = function(){
  this.myGrid = make2DArray(7,7);
  this.x_offset = 38;
  this.y_offset = 65;

  //Initialize numbers into grid
  for(let i=1; i < 6; i++){
    for(let j=1; j < 6; j++){
      this.myGrid[i][j] = new num(i*70 + this.x_offset,j*70 + this.y_offset);
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

  this.initialize = function(){
    //Fill the Rullo with random target numbers
    //About 18 out of 25 should be sufficient
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        if(random(25)<18){
          this.myGrid[i][j].setValue(floor(random(1,10)));
        }else{
          this.myGrid[i][j].setValue(-1);
        }
      }
    }
    //Set the horizontal squares
    for(let i = 1; i < 6; i++){
      let res = 0;
      for(let j = 1; j < 6; j++){
        let temp_val = this.myGrid[i][j].getValue();
        if(temp_val != -1){
          res += temp_val;
        }
      }
      this.myGrid[i][0].setValue(res);
      this.myGrid[i][6].setValue(res);
    }
    //Set the vertical squares
    for(let j = 1; j < 6; j++){
      let res = 0;
      for(let i = 1; i < 6; i++){
        let temp_val = this.myGrid[i][j].getValue();
        if(temp_val != -1){
          res += temp_val;
        }
      }
      this.myGrid[0][j].setValue(res);
      this.myGrid[6][j].setValue(res);
    }
    //Replace the (-1)'s
    for(let i=1; i < 6; i++){
      for(let j=1; j < 6; j++){
        let temp_val = this.myGrid[i][j].getValue();
        if(temp_val == -1){
          this.myGrid[i][j].setValue(floor(random(1,10)));
        }
      }
    }
  }

  this.checkColumns = function(){
    for(let i = 1; i < 6; i++){
      let temp_val = 0;
      for(let j = 1; j < 6; j++){
        if(this.myGrid[i][j].getActive()){
          temp_val += this.myGrid[i][j].getValue();
        }
      }
      this.myGrid[i][0].checkTarget(temp_val);
      this.myGrid[i][6].checkTarget(temp_val);
    }
  }

  this.checkRows = function(){
    for(let j = 1; j < 6; j++){
      let temp_val = 0;
      for(let i = 1; i < 6; i++){
        if(this.myGrid[i][j].getActive()){
          temp_val += this.myGrid[i][j].getValue();
        }
      }
      this.myGrid[0][j].checkTarget(temp_val);
      this.myGrid[6][j].checkTarget(temp_val);
    }
  }

  this.update = function(){
    this.checkColumns();
    this.checkRows();
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
          if(keyIsPressed && keyCode == SHIFT){
            this.myGrid[i][j].switchLocked();
          }else{
            this.myGrid[i][j].switchActive();
          }
          break;
        }
      }
    }
  }
}

function make2DArray(cols,rows){
  let arr = new Array(cols);
  for(let i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}
