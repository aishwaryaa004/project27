class BOB {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.radius = radius
      this.body = Bodies.circle(x, y, radius, options);
     
        
      World.add(world, this.body);
      }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
   
      fill("yellow");
  
      ellipse(0, 0, this.radius,this.radius);
      pop()
    }
    };