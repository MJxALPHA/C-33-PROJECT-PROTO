class Snow {
 constructor(x,y,width,height) {
 var options = {
     isStatic: false,
     friction:1,
     density:2,
 }
this.body = Bodies.rectangle(x,y,10,10);
this.image = loadImage("snow4.webp");
this.width = width;
this.height = height;
World.add(world,this.body);

 }
 display(){
var position = this.body.position;
push();
translate(position.x,position.y);
rotate(this.body.angle);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
 }
}