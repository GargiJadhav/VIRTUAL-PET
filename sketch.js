
var dog,sadDog,happyDog;
var button1,button2,database;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
database = firebase.database();
  foodObj = new Food(200,200);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  button1 = createButton("Add Food");
  button2 = createButton("Feed the Dog");
  button1.position(500,100);
  button2.position(410,100);

 
}

function draw() {
  background(46,139,87);
foodObj.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
