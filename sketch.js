// adding the required global variables for the game
var playerImg;
var coinImg1;
var coinImg2;
var coinImg3;
var edges;
var whiteCoin1;
var whiteCoin2;
var whiteCoin3;
var whiteCoin4;
var whiteCoin5;
var whiteCoin6;
var whiteCoin7;
var whiteCoin8;
var whiteCoin9;
var blackCoin1;
var blackCoin2;
var blackCoin3;
var blackCoin4;
var blackCoin5;
var blackCoin6;
var blackCoin7;
var blackCoin8;
var blackCoin9;
var redCoin;

//Player's initial score
var score = 0;




// loading the images for the game 
function preload(){
playerImg = loadImage("pictures/striker.png");	
coinImg1 = loadImage("pictures/redcoin.png")
coinImg2 = loadImage("pictures/whitecoin.png");
coinImg3 = loadImage("pictures/blackcoin.png");
}





function setup(){

/*
these are to create the neccesary things for the game
*/	

// making the boders of the game
topboard = createSprite(200,0,400,20);
bottomboard = createSprite(200,400,400,20);
rightboard = createSprite(0,200,20,400);
leftboard = createSprite(400,200,20,400);

// the boder's colors are the below code snippet  
topboard.shapeColor = "black";
bottomboard.shapeColor = "black";  
rightboard.shapeColor = "black"; 
leftboard.shapeColor = "black";


// making striker of the game 
player = createSprite(200,320);
player.addImage(playerImg);
player.scale = 0.6;

//making the coins of the game to be hit by the striker
redCoin = createSprite(200,200);
redCoin.addImage(coinImg1);
redCoin.scale = 0.09;
blackCoin1 = createSprite(200,190);
blackCoin1.addImage(coinImg3);
blackCoin1.scale = 0.06;
blackCoin2 = createSprite(217,215);
blackCoin2.addImage(coinImg3);
blackCoin2.scale = 0.06;
blackCoin3 = createSprite(182,215);
blackCoin3.addImage(coinImg3);
blackCoin3.scale = 0.06;
whiteCoin1 = createSprite(180,190);
whiteCoin1.addImage(coinImg2);
whiteCoin1.scale = 0.06;
whiteCoin2 = createSprite(220,190);
whiteCoin2.addImage(coinImg2);
whiteCoin2.scale = 0.06;
whiteCoin3 = createSprite(200,225);
whiteCoin3.addImage(coinImg2);
whiteCoin3.scale = 0.06;




// to make the coins and the striker bounceOff the edges
//creating the boundaries 
edges = createEdgeSprites();

}






function draw() {

//the background for the game  
background(rgb(237, 161, 90));

//this is the initial velocity value for the striker
player.velocityX = 0;
player.velocityY = 0;



//this is to make the player adapt with game through the scores
//GAME ADAPTIVITY
noFill();
stroke(0);;
text("Your score was : " + score ,150,130);



//this is the code snippet for the movement of the player left 
// and right
if(keyDown(RIGHT_ARROW)){
player.velocityX = 5;  
}
if(keyDown(LEFT_ARROW)){
player.velocityX = -5;  
}
//making the striker move forward when the space bar is pressed
if(keyDown("space")){
player.velocityY = -5; 
}
if(keyDown(DOWN_ARROW)){
player.y += 5; 
}





/*
these are to make the bounce effect
*/


//making the coins bounce of with the striker 
if(player.isTouching(redCoin)){
redCoin.bounceOff(player);
}

if(player.isTouching(blackCoin1)){
blackCoin1.bounceOff(player);
}

if(player.isTouching(blackCoin2)){
blackCoin2.bounceOff(player);
}

if(player.isTouching(blackCoin3)){
blackCoin3.bounceOff(player);
}
if(player.isTouching(whiteCoin1)){
whiteCoin1.bounceOff(player);
}
if(player.isTouching(whiteCoin2)){
whiteCoin2.bounceOff(player);
}
if(player.isTouching(whiteCoin3)){
whiteCoin3.bounceOff(player);
}


//making the striker and the other coin bouce of the board edges
redCoin.bounceOff(edges);
blackCoin1.bounceOff(edges);
blackCoin1.bounceOff(redCoin);
blackCoin2.bounceOff(edges);
blackCoin2.bounceOff(blackCoin1);
blackCoin3.bounceOff(edges);
whiteCoin1.bounceOff(edges);
whiteCoin2.bounceOff(edges);
whiteCoin3.bounceOff(edges);
whiteCoin1.bounceOff(blackCoin3);
whiteCoin2.bounceOff(whiteCoin1);
player.bounceOff(edges);





/*
 these are to  add the other lines and shapes to make the game beautiful 
*/

// this is to make the circle in the center of the game
noFill();
stroke(0);
strokeWeight(3);
ellipse(200,200,100,100);

//the carrom pockets  
noStroke();
fill("red");
var pocket1 = ellipse(10,10,50,50);  
var pocket2= ellipse(390,10,50,50);
var pocket3 = ellipse(10,390,50,50);  
var pocket4 = ellipse(390,390,50,50);
//adding the circles near the striker to denote the striker's position 
fill("red");
stroke(0);
strokeWeight(3);
var circle1 = ellipse(50,350,20,20);
var circle2 = ellipse(350,350,20,20);
var circle3 = ellipse(50,50,20,20);
var circle4 = ellipse(350,50,20,20);

//these are to make the diagnols of the game 
noFill();
stroke(0);
strokeWeight(5);
diagnol1 = line(50,50,100,100);
diagnol2 = line(350,50,300,100);
diagnol3 = line(50,350,100,300);
diagnol4 = line(350,350,300,300);

//this is the code to make the carrom board lines in the game 
fill(0);
strokeWeight(5);
var line1 = line(50,350,350,350);  
var line2 = line(50,50,350,50);  
var line3 = line(50,50,50,350);
var line4 = line(350,50,350,350);
var line5 = line(100,100,100,300); 
var line6= line(100,100,300,100);
var line7 = line(300,100,300,300);
var line8 = line(100,300,300,300);

//creating the neccesary diagnols for the game
var diagnol1
var diagnol2
var diagnol3
var diagnol4



drawSprites();
}

