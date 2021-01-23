class Fly{


constructor(bodyA,pointB){


    var opt={

        bodyA:bodyA,
        pointB:pointB,
        length:300,

    }


   this.fly=Constraint.create(opt);
   World.add(world,this.fly);
this.pointB=pointB;

}

display(){

    var pointA=this.fly.bodyA.position;
    push();
    noStroke();
    noFill();
  
    line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
    pop();


}














}