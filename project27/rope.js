class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
       this.offsetX=offsetX
       this.offsetY=offsetY
     var  option={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:offsetX,y:offsetY}
    
    
    }
    this.body= Constraint.create(option)
    
    World.add(world,this.body)
    
    
    }
    
    
    
    display(){
    
        var A = this.body.bodyA.position
        var B = this.body.bodyB.position
        push()
        strokeWeight(9)
        stroke("pink")
        line(A.x,A.y,B.x+this.offsetX,B.y)
        pop()
       
	}
    
    
    
    
    
    
    
    }