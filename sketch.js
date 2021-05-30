const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,world,ground;

var ball1;

function setup() {
  createCanvas(800,400);

  engine =Engine.create();
  world = engine.world;

  ball1 = new Ball(400,200,20,20)

}

function draw() {
  background(0,0,0);
  
  ball1.display();

  drawSprites();
}