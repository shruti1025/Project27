
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;





function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(200,50,400);
bob1=new Bob(120,250);
bob2=new Bob(160,250);
bob3=new Bob(200,250);
bob4=new Bob(240,250);
bob5=new Bob(280,250);

 rope1=new Rope(bob1.body,roof.body,(bob1.diameter)*-2,8,);
rope2=new Rope(bob2.body,roof.body,(bob2.diameter)*-1,8);
rope3= new Rope(bob3.body,roof.body,(bob3.diameter)*0,8);
rope4=new Rope(bob4.body,roof.body,(bob4.diameter)*1,8);
rope5=new Rope(bob5.body,roof.body,(bob5.diameter)*2,8);



 
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("pink");
  roof.display();
  bob1.display();
 
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
function keyPressed() {
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:0})
}
//if(keyCode ===DOWN_ARROW){
  // Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10,y:0});
//}



}
  





