
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dust1,dust2,dust3;
var wall;

function preload(){

}



function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper1 = new Paper(100,350,20);
	ground1 = new Ground(width/2,380,900,10)
	dust3 = new Dustbin(735,380,135,15)
	dust1 = new Dustbin(670,330,15,100)
	dust2 = new Dustbin(800,330,15,100)

	Engine.run(engine);
  
}


function draw() {
 
  background("pink");
  ellipseMode(RADIUS);
  dust1.display();
  dust2.display();
  dust3.display();
  paper1.display();
  ground1.display();
  
  if(paper1.x>200){
	background("lightgreen")
}

 
  drawSprites();
 
}
	function keyPressed(){
		if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:68,y:-68 })
		}



	}


