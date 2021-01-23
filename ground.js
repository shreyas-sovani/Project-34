class Ground{


    constructor(x,y,w,h){

        this.w=w;
        this.h=h;

        var opt={

            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);




    }

    display(){

        push();

        fill("white");
        rectMode(CENTER);
        
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();

    }



}
