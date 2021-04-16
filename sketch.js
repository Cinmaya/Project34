//Create variables here
var dog,dogImg,dogImg1;
var happyDog;
var database;
var food,foodStock;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,30,30);
  dog.addImage(dogImg);
  dog.scale=0.2;

  

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

  
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogImg1);
  }

  if(keyWentUp(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogImg);
  }

  drawSprites();

  textSize(25);
  fill("black");
  text("food left: "+food,200,180);
  text("Press UP ARROW To Feed Drago Milk",50,50);
  //add styles here

  if(food === 0){
    food=20
  }

}
  function readStock(data){
    food=data.val();
  
  }
  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    };
    database.ref('/').update({
      Food:x
    })
  }
  




