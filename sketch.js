const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var backgroundImg;
var player,playerImg;
var snow;
var randm;
//array
var createSnowArray = [];



function preload(){

backgroundImg = loadImage("snow1.jpg");
playerImg = loadImage("boy.png");
}


function setup() {
  createCanvas(800,400);
  //
  player = createSprite(400, 200, 50, 50);
  player.addImage(playerImg);
  player.scale = 0.5;
  //
  engine = Engine.create();
  world = engine.world;
  //
 edges = createEdgeSprites();
  
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
  



  //display
  
  for (var i = 0; i < createSnowArray.length; i++) {
    snow.display();
  } 


  


  //calling functions
 if (keyDown(UP_ARROW)){
   player.velocityY = player.velocityY-5;
 }
player.velocityY = player.velocityY+1;
player.collide(edges[3]);
  
  createSnow();
  //main
  drawSprites();
}
function createSnow(){

  randm = Math.random(100,800);

  snow = new Snow(randm*100,randm*100,50,50);
 //pushing
  createSnowArray.push(snow);
    

}