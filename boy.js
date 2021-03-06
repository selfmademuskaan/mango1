class Boy{
    constructor(x, y) {
        var options = {
          isStatic:true
          //  'restitution':0.8,
           // 'friction':1.0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 100;
        this.height = 300;
        this.image = loadImage("boy.png");
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
      }
}