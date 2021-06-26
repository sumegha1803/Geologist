class Sand
{
    constructor(x,y)
{
    var option={
        'restitution' : 1.3,
        'friction': 5,
        'density': 1,
    }
    this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option);
    World.add(world,this.body);
    
   
}

display()
{
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("black");
    fill("brown");
   ellipse(0,0,this.r,this.r);
    pop();     
}

}