
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer; stone; rubber; iron;
var plane;
var sand1; sand2; sand3; sand5; sand4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer= new Hammer(100,200);
	plane= new Plane(600,height,1200,20);
    stone= new Stone(200,400,100,100);
	rubber= new Rubber(150,200,50);
	iron= new Iron(230,200);

	sand1= new Sand(250,250,5);
	sand2= new Sand(255,250,5);
	sand3= new Sand(260,250,5);
	sand4= new Sand(265,250,5);
	sand5= new Sand(270,250,5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  
  hammer.display();

  plane.display();
  stone.display()
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  
 
}



