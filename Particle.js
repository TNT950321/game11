class Particle{
    constructor(x, y, r) {
             var options = { 
             restitution :0.4, 
             friction :0.0, 
             density:1.0      
             
           }    

    }
    display(){
      this.body = Bodies.circle(x, y, this.r,options);
      this.color=color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
}