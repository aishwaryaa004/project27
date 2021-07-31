
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3 , bob4,bob5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bob1= new BOB(240,400,40)
     bob2= new BOB(320,400,40)
	 bob3= new BOB(415,400,40)
	 bob4= new BOB(490,400,40)
	 bob5= new BOB(530,400,40)

	 rooftop= new Roof(430,90,600,20)

	 rope1= new Rope(bob1.body,rooftop.body,-40*2,0)
   rope2= new Rope(bob2.body,rooftop.body,-40*1,0)
   rope3= new Rope(bob3.body,rooftop.body,-40*0,0)
   rope4= new Rope(bob4.body,rooftop.body,40*1,0)
   rope5= new Rope(bob5.body,rooftop.body,40*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine) 
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rooftop.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope5.display()
  rope4.display()
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-10});

  }
}


