class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(10,200,10,70);
    player1.shapeColor = "black"
    
    player2 = createSprite(360,200,10,70);
    player2.shapeColor = "red"
    

    ball = createSprite(200,200,10,10);
    ball.shapeColor = "white"
    players=[player1,player2];
        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                //ball.readPosition();
               
                 image(back_img, 0, 0, 500, 500);
                 var x =200;
                 var y=200;
                 var index =0;
                 drawSprites();
                 
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     //x = 50;
                     y=200-allPlayers[plr].distance;
                     
                     player1.x = 10;
                     player2.x = 380;
                    
                     players[index - 1].y = y;
                   
                    
                    for (var i = 0; i < 400; i=i+20) {
                        line(200,i,200,i+10);
                      }
                         textSize(25);
                         fill("white");
                         text(allPlayers.player1.score,230,20);
                        text(allPlayers.player2.score, 170,20);
                        
                        if(gs === "serve"){
                            text("Press Space to Serve",150,180);
                          }
                        if(keyDown("space") &&  gs === "serve"){
                            ball.velocityX = 2;
                            ball.velocityY = 3;
                            //writePosition(x,y)
                            gs = "play";
                            
                        }
                        if (player.index !== null) {
                            if(ball.x > 400 || ball.x <0) {
            
                                if(ball.x > 400) {
                                    player.score = player.score + 1;
                                   //writePosition(x,y)
                                }
                                
                                if(ball.x < 0) {
                                    player.score = player.score + 1;
                                   //writePosition(x,y)
                                }
                                //Ball.writePosition(x,y)
                                ball.x = 200;
                                ball.y = 200;
                                ball.velocityX = 0;
                                ball.velocityY = 0;
                                gs = "serve";
                               //writePosition(x,y)
                              }
                              if (player.score === 5 || player.score === 5){
                                gs = "over";
                                text("Game Over!",170,160);
                                text("Press 'R' to Restart",150,180);
                              }
                              
                              if (keyDown("r") && gs === "over") {
                                gs = "serve";
                                player.score = 0;
                                player.score = 0;
                                //writePosition(x,y)
                              // Ball.writePosition(x,y)
                              }
                        }
                              
                 }
                 
                 
                
                
                  
                edges = createEdgeSprites();
                ball.bounceOff(edges[2]);
                ball.bounceOff(edges[3]);
                ball.bounceOff(player1)
                ball.bounceOff(player2)

                // if (keyIsDown(UP_ARROW) && player.index !== null) {
                //     player.distance += 10
                //     player.update();
                // }
                // if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                //     player.distance -= 10
                //     player.update();
                // }
            
              

    }

   
}