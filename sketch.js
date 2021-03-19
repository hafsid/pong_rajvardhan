var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players,edges;
var ball,b;
var gs = "serve";
var hypnoticBall,position;
var BallPosition;



function preload(){
  back_img = loadImage("background.jpg");
  
}
function setup() {
  createCanvas(400, 400);
  database = firebase.database();
  // ball = createSprite(200,200,10,10);
  // ball.shapeColor = "red";


  // var hypnoticBallPosition = database.ref('ball/position');
  // hypnoticBallPosition.on("value", readPosition, showError);
  game = new Game();
  game.getState();
  game.start();
  

  
}

function draw() {
  background(back_img);
  
  

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
     
     
   }
   if (gameState === 2) {
    
     game.end();
   }
}
// function writePosition(x,y){
//   database.ref('ball/position').set({
//     'x': position.x + x ,
//     'y': position.y + y
//   })
// }

// function readPosition(data){
//   position = data.val();
//   console.log(position.x);
//   ball.x = position.x;
//   ball.y = position.y;
// }

// function showError(){
//   console.log("Error in writing to the database");
// }
  
