
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here.
    bin = new dustbin(500,600,100,50)
    bin1 = new dustbin(240, 100, 50, 100);
    bin2 = new dustbin(400, 100, 50, 100);
  
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin.display();
  bin1.display();
  bin2.display();
  ground.display();
  drawSprites();
 
}



