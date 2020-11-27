
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,380,1200,20);
	paper1 = new Paper(50,350,20,[Paper],[20]);
	dustbin1 = new Dustbin(830,360,200,20,PI/2);
	dustbin2 = new Dustbin(720,320,20,100,PI/2);
	dustbin3 = new Dustbin(940,320,20,100,PI/2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display(); 
  dustbin3.display();
}



