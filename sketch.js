const Bodies = Matter.Bodies;

var divisionHeight = 300;

var division1,division2,division3,division4,division5,division6,division7;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  division1 = new Divisions(0,650,5,divisionHeight);
  division2 = new Divisions(80,650,5,divisionHeight);
  division3 = new Divisions(160,650,5,divisionHeight);
  division4 = new Divisions(240,650,5,divisionHeight);
  division5 = new Divisions(320,650,5,divisionHeight);
  division6 = new Divisions(400,650,5,divisionHeight);
  division7 = new Divisions(480,650,5,divisionHeight);
}

function draw() {
  background("black");  
  drawSprites();

  for(var k = 0; k<=innerWidth; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
}