class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width, height,options);
      this.width = 30;
      this.height = 40;
      //this.radius=30;
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){

      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      /*var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.radius, this.radius);*/
    }
  };