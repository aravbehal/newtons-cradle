
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var roof1;

var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(1600,800);
    rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	roof1=new roof(width/2,height/6,width/4,20);
	bobDiameter=20;
	bobPositionX=width/2
	bobPositionY=height/4+500

	bob1=new bob(bobPositionX-bobDiameter*2,bobPositionY,bobDiameter);
	bob2=new bob(bobPositionX-bobDiameter,bobPositionY,bobDiameter);
	bob3=new bob(bobPositionX,bobPositionY,bobDiameter);
	bob4=new bob(bobPositionX+bobDiameter,bobPositionY,bobDiameter);
	bob5=new bob(bobPositionX+bobDiameter*2,bobPositionY,bobDiameter);


	rope1=new Rope(bob1.body,roof1.body,-bobDiameter*2,0)
	rope2=new Rope(bob2.body,roof1.body,-bobDiameter,0)
	rope3=new Rope(bob3.body,roof1.body,0,0)
	rope4=new Rope(bob4.body,roof1.body,bobDiameter,0)
	rope5=new Rope(bob5.body,roof1.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  bob1.display();
  roof1.display();
  
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}

