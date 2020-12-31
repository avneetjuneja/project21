var bullet, wall;
var thickness, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(500,200,50,20);
  bullet.shapeColor = color("white");
  wall =  createSprite(1200,200,60,100);
   
   bullet.velocityX = 5;


  thickness = random(22,83);
  weight = random(30,52);
  speed = random (223,321);
}

function draw() {
  background("black");
  
  if (hasCollided(bullet,wall)) {
    
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed*speed/(thickness *thickness *thickness);
   
    if(damage>10)
    {
    
    wall.shapeColor = color("green");
    }

   if(damage<10) 
   {
    wall.shapeColor = color("red");
   }

}

  drawSprites();

  hasCollided(bullet,wall);
}

function hasCollided(bullet1,wall1) 
{

  bulletRightEdge = bullet1.x + bullet1.width;
  wallLeftEdge = wall1.x;
  if(bulletRightEdge>=wallLeftEdge) 
  {
    return true;
  }
    return false;
}