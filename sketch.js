
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	tree = new Tree(600,200)
	boy=new Boy(200,310);
	m1=new Mango(500,100);
	m2=new Mango(500,160);
	m3=new Mango(550,170);
	m4=new Mango(600,50);
	m5=new Mango(590,150);
	m6=new Mango(600,100);
	m7=new Mango(700,100);
	m8=new Mango(700,160);
	m9=new Mango(560,100);
	m10=new Mango(650,70);
	m11=new Mango(650,130);

	s=new Stone(170,240);

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  boy.display();
s.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  drawSprites();
 
}



