class Box{
    constructor(x,y,width,fillCol){
        this.x=x
        this.y=y
        this.w=width
       this.col=fillCol
       this.visbility = 255

        var option={
            restitution: 0,
            friction:1,
            density:0.0000000000000000000000000000000000000000000000000000000000000000000000001,
            isStatic: false
        }

        this.body=Bodies.rectangle(x,y,width,width,option);
        World.add(world,this.body)
    }
display() {
  var boxPos=this.body.position


console.log(this.body.speed);

if(this.body.speed>6){
  World.remove(world, this.body)
  push()
  tint(255, this.visbility)
  this.visbility=this.visbility-5
  pop()
}

else{
rectMode(CENTER) 
strokeWeight(1);
fill(this.col); 
rect(boxPos.x,boxPos.y,this.w,this.w)}
}
}