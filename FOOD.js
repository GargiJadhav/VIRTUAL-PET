class Food{

constructor(x,y){
this.foodStock = 0;
this.image = loadImage("images/Milk.png");


}
//getFoodStock(){
   // var getFood = database.ref('')
//}

display(){
   
image(this.image,500,300,70,70);
for(var i = 10; i>this.foodStock;i++){
    image(this.image,500,300,70,70);
}
}










}