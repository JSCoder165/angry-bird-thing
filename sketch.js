const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Bird
var Pig
var Log
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //bird
    Bird = new bird(100, 100);
    //boxes
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    //ground
    ground = new Ground(600,height,400,20)
    //pigs
    Pig = new pig(810, 350);
    Pig2 = new pig(810, 220);
    //logs
    Log = new log(810,260,300, PI/2);
    Log2 = new log(810,180,300, PI/2);
    Log3 = new log(760,120,150, PI/7);
    Log4 = new log(870,120,150, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    //testing
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    //display the boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    //display ground
    ground.display();
    //display bird
    Bird.display();
    //display pigs
    Pig.display();
    Pig2.display();
    //display logs
    Log.display();
    Log2.display();
    log3.display();
    log4.display();
}