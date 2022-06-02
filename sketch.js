var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

player = createSprite(20,500);
player.addImage("shooter",shooterImg);
player.scale= 0.7;


}

function draw() {
  background(0); 
//allowing movement to the player
  if (keyDown("UP_ARROW")){
    player.y -= 10
  }

  if (keyDown("DOWN_ARROW")){
    player.y += 10
  }

  if (keyDown("RIGHT_ARROW")){
    player.x += 10
  }

  if (keyDown("LEFT_ARROW")){
    player.x -= 10
  }

if(keyWentDown("space")) {
  console.log("hi");
player.addImage("shooting",shooter_shooting);
}

 else if(keyWentUp("space")) {
  console.log("hello");
  player.addImage("shooter",shooterImg);
  }

drawSprites();

}
