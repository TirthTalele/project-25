class Ball{

    constructor(x,y,w,h){
        var options ={
            restitution: 0.5,
            friction: 1.0,
            density: 1.2
        }
        this.box = Bodies.rectangle(x,y,w,h,options); 
        this.width =w;
        this.height = h;
        World.add(world,this.box);
       this.image = loadImage("paper.png");
    }
    display(){
        imageMode(CENTER);
          
         image(this.image,this.box.position.x,this.box.position.y,this.width,this.height);
        
        
        }

        upkey(){
            Body.applyForce(this.box,this.box.position,{x:35,y:-35 });   
        }
}