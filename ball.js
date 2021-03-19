class Ball {
    constructor() {
       
    }

     writePosition(x,y){
        database.ref('ball/position').set({
          x: position.x + x ,
          y: position.y + y
        })
        
      }
      
     static readPosition(){
        var BallPosition = database.ref('ball/position');
        BallPosition.on("value", (data) =>{
          position = data.val();
            
        });
        b.x = position.x;
        b.y = position.y;
        
        //console.log(position.x);
        
      }
      
      
}
