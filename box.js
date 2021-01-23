class Box{


constructor(x,y,w,h){

    var opt={
        'restitution':0.3,
        'density':1,
        'friction':2,
        'isStatic':false
    }

    this.w=w;
    this.h=h;

    this.body=Bodies.rectangle(x,y,w,h,opt);
    World.add(world,this.body);
    this.color=color(random(0,255,),random(0,255,),random(0,255));



}
display(){

    rectMode(CENTER);
    fill(this.color);
    rect(this.body.position.x,this.body.position.y,this.w,this.h);



}










}
