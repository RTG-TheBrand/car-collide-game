var bullet,wall;
var speed,weight;
var thikness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2);

speed=random(55,90);
weight=random(400,1500);
thikness=random(22,83);


}

function draw() {
  background("black");  

bullet.velocityX=speed;

if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5*speed*speed/(thikness*thikness*thikness);

if(damage>10){

  wall.shapeColor="red";
}

if(damage<10){

  wall.shapeColor="green";
}

}

  drawSprites();
}


function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

return true

  }

return false;

}


/*

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    //ball = Bodies.rectangle(200,100,20,20, ball_options);
    //ball = Bodies.rectangle(200,100,20,20);
    ball= Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

   
    //rect(ball.position.x, ball.position.y, 20, 20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);

}
*/
