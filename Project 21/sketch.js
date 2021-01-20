var bullet, wall;

var speed,weight,thickness,damage;

function setup() {
createCanvas(1600,400);

bullet = createSprite(100,200,50,20);
bullet.display();


speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor(80,80,80);

}

function draw() {
bullet.velocityX = speed;

if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  damage = 0.5*weight*speed*speed/thickness*thickness*thickness

  if(damage < 10)
{
wall.shapeColor(255,0,0);
}

if(damage > 10)
{
wall.shapeColor(0,255,0);

}
}

drawSprites();
}
function hasCollided(Lwall,Lbullet){
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2)
  {
    return true; 
  }
  return false;
}
