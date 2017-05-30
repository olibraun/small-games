//Sketch-Datei für Breakout

var paddle;
var paddleheight = 350;
var acc = 7;

var ball;

var block;

function setup() {
  createCanvas(700,400);
  paddle = new Paddle();
  ball = new Ball();
  block = new Block();
}

function draw() {
  background(51);
  //stroke(251);
  //line(width/2,0,width/2,height);
  paddle.update();
  paddle.show();
  ball.update();
  ball.show();
  block.show();
}
