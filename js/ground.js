class ground
{
    constructor(x,y,width,height)
    {

        var options=
        {
            isStatic:true
        }

        this.groundObject=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.groundObject);
        this.width=width;
        this.height=height;
    }

    display()
    {
		push();
        rectMode(CENTER);
        fill("green");
        stroke(0);

        rect(this.groundObject.position.x,this.groundObject.position.y,this.width,this.height);
        pop();
	}

}