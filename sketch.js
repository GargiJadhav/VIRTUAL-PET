var balloon,balloonImg1,balloonImg2,backgroundImg;
var position,database,balloonref;


function preload(){
balloonImg1 = loadImage("pro-C35 images/Hot Air Ballon-02.png");
backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png");
balloonImg2 = loadImage("pro-C35 images/Hot Air Ballon-03.png");
}


function setup() {
  createCanvas(500,500);
  balloon = createSprite(300, 200, 50, 50);
  balloon.scale = 0.4;
  balloon.addImage(balloonImg1);
database = firebase.database();
balloonref = database.ref('balloon/position');
balloonref.on("value",readPosition);
}

function draw() {
  background(backgroundImg);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.x+10;
  }
  drawSprites();
}
function writePosition(){
  balloonref = databse.ref('balloon.position').set({x:position.x+x,y:position.y+y})
}
function readPosition(data){
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}