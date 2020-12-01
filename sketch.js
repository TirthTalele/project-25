
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,650,800,20);
   ball = new Ball(100,600,30,30);
   box1 = new Box(500,630,200,20);
   box2 = new Box(400,605,20,70);
   box3 = new Box(600,605,20,70);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(255);
  
 box1.display();
box2.display();
box3.display();
ball.display(); 
image(dustbinImage,500,550);
ground.display();	
  }

  function keyPressed() { 
	  if (keyCode === UP_ARROW) { 
			 ball.upkey();
		 } }

