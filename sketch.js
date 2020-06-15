var car,wall
var thickness,speed,weight 

function setup() {
 createCanvas(1600,400);
speed=random(223,321)
weight=random(30,52)
car=createSprite(50, 200, 50, 50);
wall=createSprite(1200,200,thickness,height/2)
car.velocityX=speed
thickness=random(22,83)
}


function draw() {
  background(255,255,255);  
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0
  var deformation=0.5 * weight * speed * speed/22509
  if(deformation>180)
  {
    car.shapeColor="red"  
  }
  if(deformation<180 && deformation>100 )
  {
    car.shapeColor="red"
  }
  if(deformation<100)
  {
    car.shapeColor="red"
  }
  
  
  }

  drawSprites();

}
function hasCollided(LbuLLet, LwoLt)
{
bulletRightEdge= lbullet.x +  lbullet.wIdth;
wallleftEdge = lwall.x;
If (bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
if(hasCollIded(bullet, wall))
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
if(damage>10)
{
  wall.shapeColor="red"
}



if(damage<10)
{
  
  wall.shapeColour="red"

}

}