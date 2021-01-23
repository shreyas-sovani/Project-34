const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
//preload the images here

bgImage=loadImage("bg.png");

}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
    world = engine.world;

  // create sprites here
  hero=new Hero(200,400,150,150);
rope = new Fly(hero.body,{x:250,y:250});
  ground=new Ground(500,700,1000,10);

  mon=new Mon(800,650,230,230);

  //side 1 left

  box1=new Box(400,650,50,70);
  box2=new Box(400,600,50,70);
  box3=new Box(400,550,50,70);
  box4=new Box(400,500,50,70);

  //side 2 left

  box5=new Box(500,650,50,70);
  box6=new Box(500,600,50,70);
  box7=new Box(500,550,50,70);

  //layer 3 left

  box8=new Box(600,650,50,70);
  box9=new Box(600,600,50,70);
  box10=new Box(600,550,50,70);
  box11=new Box(600,500,50,70);
  box12=new Box(600,450,50,70);
  box13=new Box(600,400,50,70);




}

function draw() {
  background("blue");

  Engine.update(engine);

mon.display();
ground.display();
hero.display();
rope.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}

