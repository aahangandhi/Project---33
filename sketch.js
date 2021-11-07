var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisionHeight=300;
var score =0;
var turns = 5;
var divisions = []
var gameState = "play";
var particle


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  for (var k = 0; k <=width; k = k + 72.5) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var j = 80; j <=width-10; j = j + 80) {
    plinkos.push(new Plinko(j, 75));
  }
  
  for (var j = 40; j <=width-10; j = j + 80) {
    plinkos.push(new Plinko(j, 175));
  }
  
  for (var j = 80; j <=width-10; j = j + 80) {
    plinkos.push(new Plinko(j, 275));
  }
  
  for (var j = 40; j <=width-10; j = j + 80) {
    plinkos.push(new Plinko(j, 375));
  }
  
  
    base = new Ground(width/2, height+10, width, 20)
}
 


function draw() {
  background("black");
  textSize(20)
  text("Turns left : "+turns,20,30);
  text("Score : "+score,675,30);
  Engine.update(engine);
 

  if(turns === 0){
    gameState = "end"
    fill("red");
    textSize(40)
    text("Game Over",295,420);
    fill("yellow");
    textSize(20)
    text("Press 'Space' to play again",280,450);
  }

    if(keyCode === 32&&gameState === "end"){
    window.location.reload();
    window.location.reload();
  }

  //Text for displaying score

  fill(17,253,7);
  text("100",20, height-divisionHeight/2)
  text("200",95, height-divisionHeight/2)
  text("300",167, height-divisionHeight/2)
  text("400",238, height-divisionHeight/2)
  text("500",310, height-divisionHeight/2)
  text("1000",377, height-divisionHeight/2)
  text("500",455, height-divisionHeight/2)
  text("400",528, height-divisionHeight/2)
  text("300",600, height-divisionHeight/2)
  text("200",673, height-divisionHeight/2)
  text("100",745, height-divisionHeight/2)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   //displaying and scoring particles

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
        if (particle.body.position.x>0&&particle.body.position.x<72.5) 
        {
            score=score+100;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>72.5&&particle.body.position.x<145) 
        {
            score=score+200;
            particle = null;   
            gameState = "play";
        }  

        else if (particle.body.position.x>145&&particle.body.position.x<217.5) 
        {
            score=score+300;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>217.5&&particle.body.position.x<290) 
        {
            score=score+400;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>290&&particle.body.position.x<362.5) 
        {
            score=score+500;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>362.5&&particle.body.position.x<435) 
        {
            score=score+1000;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>435&&particle.body.position.x<507.5) 
        {
            score=score+500;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>507.5&&particle.body.position.x<580) 
        {
            score=score+400;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>580&&particle.body.position.x<652.5) 
        {
            score=score+300;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>652.5&&particle.body.position.x<725) 
        {
            score=score+200;
            particle = null;   
            gameState = "play";
        }

        else if (particle.body.position.x>725&&particle.body.position.x<797.5) 
        {
            score=score+100;
            particle = null;   
            gameState = "play";
        }
             
       }
 
     }

 
   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState==="play")
  {
      turns--;
     particle = new Particle(mouseX, 10,10); 
     gameState = "particle"
  }   
}































