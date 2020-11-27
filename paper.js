class Paper
{
   constructor(x,y,width,height)
   {
       var options = 
       {
           isStatic:false,
           restitution:1.0,
           friction:0.5,
           dencity:1.2
       }
       //this is a keyword which refers the current object
      // this.body=Bodies.elepise(x,y,width,height,options);
       this.body=Bodies.elepise(x, y, 120, [options], [20]);
       this.width=width;
       this.height=height;
       World.add(world,this.body);

   }

   display()
   {
       var pos=this.body.position;
       var angle=this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate (angle);
       elepiseMode(CENTER);
       fill("red");
      // rect(0,0,this.width,this.height);
       pop();
       
   }
   function keyPressed(){
    if (keyCode === UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body. position,{x:85,y:-85})
  }    
  }


}