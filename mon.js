class Mon{


    constructor(x,y,w,h){
    
        var opt={
            'restitution':0.3,
            'density':0.3,
            'friction':1,
            'isStatic':false
        }
    
        this.w=w;
        this.h=h;
    
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
        this.image=loadImage("Monster-01.png");
       
    
    
    
    }
    display(){
    
        imageMode(CENTER);
       
      image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    }
    