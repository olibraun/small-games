//Ball object

function Ball(){
  this.pos = createVector(width/2,0.7*paddleheight);
  this.r = 5;
  this.dir = createVector(random(width),random(height));//createVector(0,1);
  this.speed = 4;//2.5;
  this.dir.setMag(this.speed);

  this.update = function(){
    //Check to see if the ball hits the paddle and adjust direction
    if(this.hitsPaddle()){
      //Entwurf
      this.dir.y *= -1;
    }
    //Check to see if the ball hits a side wall and adjust direction
    if(this.hitsSideWall()){
      //Entwurf
      this.dir.x *= -1;
    }
    //Check to see if the ball hits the top wall and adjust direction
    if(this.hitsTopWall()){
      //Entwurf
      this.dir.y *= -1;
    }

    //Update to generate movement
    this.pos.add(this.dir);
  }

  this.show = function(){
    fill(251);
    ellipse(this.pos.x,this.pos.y,2*this.r)
  }

  this.hitsPaddle = function(){
    if(this.pos.y >= paddleheight && this.pos.x <= paddle.rightx()+0.1 && this.pos.x >= paddle.leftx()-0.1){
      return true;
    }else{
      return false;
    }
  }

  this.hitsSideWall = function(){
    if(this.pos.x<=0.1 || this.pos.x >= width-0.1){
      return true;
    }else{
      return false;
    }
  }

  this.hitsTopWall = function(){
    if(this.pos.y <= 0.1){
      return true;
    }else{
      return false;
    }
  }
}
