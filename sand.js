class Sand {
    constructor(x, y,radius) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      strokeWeight(5);
      stroke("red");
      fill(255);
      ellipse(pos.x,pos.y,this.radius);
      pop();
    }
  };