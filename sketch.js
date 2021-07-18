var track,trackImg;
var runner, runnerAnimation;
var leftWall, rightWall;
function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImg);
  track.velocityY=2;

  leftWall = createSprite(60,200,30,400);
  rightWall = createSprite(350,200,30,400);
  leftWall.visible=false;
  rightWall.visible = false;

  runner = createSprite(200,300);
  runner.addAnimation("runner", runnerAnimation);
  runner.scale = 0.05;

}

function draw() {
  background(0);
  
  if(track.y>400){
    track.y = track.height/5;
  }

  if(keyDown("right")){
    runner.x = runner.x+5;
  }

  if(keyDown("left")){
    runner.x = runner.x-5;
  }

  runner.collide(leftWall);
  runner.collide(rightWall);
  drawSprites();

}
