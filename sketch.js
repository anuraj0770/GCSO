var car,wall
var speed,weight
var wall1,wall2,wall3
var car1,car2,car3


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

car=createSprite(50,200,50,50)
car.velocityX=speed;

car1=createSprite(50,150,50,50)
car1.velocityX=speed;

wall=createSprite(1500,200,60,height/2)
wall1=createSprite(1000,150,60,height/2)
wall2=createSprite(500,100,60,height/2)
wall3=createSprite(100,50,60,height/2)

}

function draw() {
  background(255,255,255);  
  drawSprites();

if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180){
  car.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
  }

if(deformation<100){
car.shapeColor=color(0,255,0);
}
}
}var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

car=createSprite(50,200,50,50)
car.velocityX=speed;

wall=createSprite(1500,200,60,height/2)

}

function draw() {
  background(255,255,255);  
  drawSprites();

if(wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180){
  car.shapeColor=color(255,0,0)
}

if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
  }

if(deformation<100){
car.shapeColor=color(0,255,0);
}
}
}