var bgImg;
var max, maxImg;
var platform, platformImg;
var gorilla, gorillaImg;
var plant, plantImg;
var apple,banana, berry, appleImg, bananaImg, berryImg;
var bottle, bottleImg;
var ground;
var obstacleGroup;
var fruitGroup;
var platformGroup;

function preload()
{
  bgImg = loadImage("./Assets/Jungle.jpg");
  platformImg = loadImage("./Assets/platform.jpg");
  gorillaImg = loadImage("./Assets/Gorrilla.png");
  plantImg = loadImage("./Assets/Plant.png");
  appleImg = loadImage("./Assets/Apple.png");
  bananaImg = loadImage("./Assets/Banana.png");
  berryImg = loadImage("./Assets/Berry.jpg");
  bottleImg = loadImage("./Assets/Water bottle.jpg");
  maxImg = loadImage("./Assets/Maxbg.png");
}

function setup() {
  createCanvas(800,400);
  
  max = createSprite(200,300);
  max.addImage(maxImg);
  max.scale = 0.3;

  /*plant = createSprite(400,300);
  plant.addImage(plantImg);
  plant.scale = 0.13;

  gorilla = createSprite(700,300);
  gorilla.addImage(gorillaImg);
  gorilla.scale = 0.3;*/

  ground = createSprite(400,380,800,60);

  obstacleGroup = createGroup();
  fruitGroup = createGroup();
  platformGroup = createGroup();

}

function draw() {
  background(bgImg);  
  drawSprites();

  if(ground.x < 0)
  {
    ground.x = ground.width/2;
  }

  if(keyDown("right"))
  {
    max.x += 10;
  }
  max.bounceOff(plant);

  spawnPlantsGorilla();
  spawnFruit();
  spawnPlatforms();
}

function spawnPlantsGorilla()
{
 if(frameCount % 90===0)
 {
   var obstacle = createSprite(400,300);
   obstacle.velocityX = -5;

   var randomNum = Math.round(random(1,2));

   switch(randomNum)
   {
     case 1:obstacle.addImage(plantImg);
     obstacle.scale = 0.13;
     break;
     case 2:obstacle.addImage(gorillaImg);
     obstacle.scale = 0.3;
     break;
     default: break;
   }
   obstacle.lifetime = 800;
   obstacleGroup.add(obstacle);
 }
}

function spawnFruit()
{
  if(frameCount % 90===0)
 {
   var energy = createSprite(400,300);
   energy.velocityX = -5;

   var randomNum = Math.round(random(1,2));

   switch(randomNum)
   {
     case 1:energy.addImage(appleImg);
     energy.scale = 0.13;
     break;
     case 2:energy.addImage(berryImg);
     energy.scale = 0.3;
     break;
     case 3:energy.addImage(bananaImg);
     energy.scale = 0.3;
     break;
     default: break;
   }
   energy.lifetime = 800;
   energyGroup.add(energy);
 }

}

function spawnDrink()
{
  if(frameCount % 180===0)
 {
   var bottle = createSprite(400,300);
   bottle.velocityX = -5;

   
   bottle.lifetime = 800;
   energyGroup.add(energy);
 }

}

function spawnPlatforms() {
  
  if (frameCount % 60 === 0) {
     platform = createSprite(600,100,40,10);
    platform.y = Math.round(random(10,60));
    platform.addImage(platformImg);
    platform.scale = 0.5;
    platform.velocityX = -3;
    
    platform.lifetime = 800    
   platformGroup.add(platform);
    }
}