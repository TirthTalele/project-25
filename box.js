class Box{

    constructor(x,y,w,h){
        var options ={
            isStatic: true
        }
        this.box = Bodies.rectangle(x,y,w,h,options); 
        this.width =w;
        this.height = h;
        World.add(world,this.box);
    
    }
    display(){
        rectMode(CENTER);
          
         fill("green");
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
        
        }

}