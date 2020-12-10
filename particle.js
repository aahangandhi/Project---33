class Particle {
    constructor(x,y,radius,color){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255))
        this.radius = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        this.color = color(random(0,255),random(0,255),random(0,255))
        rectMode(CENTER);
        fill("white");
        ecllipse(pos.x,pos.y,this.radius);
    }
    }
