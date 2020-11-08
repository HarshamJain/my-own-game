class Rope
{
    constructor(bodyA,pointB)
    {
        var options=
        {

        
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250
        }
    
    this.pointB=pointB;
    this.rope=Constraint.create(options);
    World.add(world,this.rope);

    }


attach(body)
{
this.rope.bodyA=body
}

fly()
{
this.body=null
}

display()
{
    if(this.rope.bodyA)
    {
        var pointB=this.pointB
        var pointA=this.rope.bodyA.position;
        push()
        stroke(48,22,8);
        strokeWeight(7);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }

}
}

