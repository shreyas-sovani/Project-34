class Hero{

    constructor(x,y,w,h){


        var opt={
            'isStatic':false,
            'restitution':0.9,
            'friction':1,
            'density':1.5
        }

        this.h=h;
        this.w=w;

        this.body=Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
        this.image=loadImage("hero.png");



    }

    display(){


        imageMode(CENTER);

   
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h,);

    }


}