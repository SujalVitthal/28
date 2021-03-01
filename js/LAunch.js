class LAunch{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:0.8
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcherChain=Constraint.create(options)
		World.add(world,this.launcherChain)
	}

	attach(body){
		this.launcherChain.bodyA=body;
	}

	fly()
	{
		this.launcherChain.bodyA = null;
	}

	display()
	{
		if(this.launcherChain.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}
