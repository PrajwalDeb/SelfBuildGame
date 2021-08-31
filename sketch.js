var theHero, theHeroImage;
var baseGround, baseGroundImage;
var upperGround, upperGroundImage;
var Fbackground; FbackgroundImage;
var score, score = 0;

// resize the images //

var obstacle1 ;
var obstacle2 ;
var obstacle3 ;
var obstacle4 ;
var obstacle5 ;
var obstacleGroup ;
var obstacles ;

function preload(){
  obstacle1 = loadImage('Images/RockMonster.png');
  obstacle2 = loadImage('Images/Rock2.png');
  obstacle3 = loadImage('Images/Tree.png');
  obstacle4 = loadImage('Images/OILSpill.png');
  obstacle5 = loadImage('Images/OilDrum.png');
  FbackgroundImage = loadImage('images/BackGroundReal1.jpg');
  theHeroImage = loadAnimation('Images/Running1.png','Images/Running2.png','Images/Running3.png','Images/Running4.png','Images/Running5.png');

}

function setup() {
  createCanvas(1200,500);

theHero = createSprite(50,460,30,30);
theHero.addAnimation('character',theHeroImage);
theHero.scale = 1.5;

obstaclesGroup = new Group();

Fbackground = createSprite();
//Fbackground.addImage(FbackgroundImage);
//Fbackground.velocityX = -5;

Fbackground.x = Fbackground.width/2;

baseGround = createSprite(400,500,2000,10);
baseGround.velocityX = -7;
baseGround.x = baseGround.width/2;

score = 0;

}

function draw() {
  background(FbackgroundImage);  
  
  if (baseGround.x < 0){
    baseGround.x = baseGround.width/2;
  }

  if (Fbackground.x < 0){
    Fbackground.x = Fbackground.width/2;
  }

if(keyDown('space')&& theHero.y >= 375){
  theHero.velocityY = -7
}
theHero.velocityY = theHero.velocityY + 0.3
theHero.collide(baseGround);

//console.log(theHero.y)

if(obstaclesGroup.isTouching(theHero)){
  theHero.veolcityX = 0;
  baseGround.velocityX = 0;
  obstaclesGroup.setVelocityXEach(0);
  // to change animation //
}

//theHero.debug = true;

text("Score: " + score, 985,50)


  spawnObstacles();

  drawSprites();
}