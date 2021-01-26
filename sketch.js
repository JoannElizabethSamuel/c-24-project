const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,iron;
var hammer;
var sand1,sand2,sand3,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(600,200,40,40);
	iron = new Stone(400,200,30,30);
	hammer = new Hammer(200,200,40,30);
	sand1 = new Sand(250,200,5);
	sand2 = new Sand(300,200,5);
	sand3 = new Sand(350,200,5);
	rubber = new Sand(100,200,30);
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  stone.display();
  iron.display();
  hammer.display();
  sand1.display();
  sand2.display();
  sand3.display();
  ground.display();
  rubber.display();
  
  drawSprites();
 
}



