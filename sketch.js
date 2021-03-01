
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var launch;
var stone;


var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1011,70,30);
	mango3=new mango(1150,80,30);
	mango4=new mango(1016,70,30);
	mango5=new mango(1140,150,30)
	mango6=new mango(1128,60,30)
	mango7=new mango(1010,70,70)
	mango8=new mango(1171,200,50)

	treeObj=new tree(1050,580);
	
	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(240,420,30);

	launch= new LAunch(stone.body,{x:240,y:420}) ;
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  groundObject.display();
  launch.display();
  stone.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launch.fly();
   
}
