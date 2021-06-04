var cyclone,cycloneGroup,cyclone_running ;
var harry,harrypotterImage ;
var env1,env1Img
var house1,house1Img,house2,house2Img,house3,house3Img;
function preload() {
  cyclone_running = loadImage("cyclone6.png");
  harrypotterImage = loadImage("harry potter.png");
   env1Img = loadImage("night.jpg");
  house1Img = loadImage("house1.png");
  house2Img =loadImage("house2.png");
  house3Img = loadImage("house3.png");
}

function setup() {
  createCanvas(600,300);
  edges = createEdgeSprites();
  //crate a cyclone sprite
 
  //create a harry sprite
    env1 = createSprite(200,300,600,20);
  cycloneGroup = createGroup();
  env1.addImage("env1",env1Img);
  env1.scale = 0.4
  
  
  harry = createSprite(50,200,30,50 );
  harry.addImage("harrypotter",harrypotterImage);
  harry.scale = 0.10
}

function draw() {
  //set background color
  background("lightblue")
  env1.velocityX = -3;
  if(env1.x<0){
    env1.x = env1.width/8
  }
  //left when space key is pressed
  if(keyDown("up")){
     harry.velocityY = -5;
  }
   if(keyDown("down")){
     harry.velocityY = 4;
       
  }
  if(keyDown("left")){
     harry.velocityX = -5;
  }
  if(keyDown("right")){
     harry.velocityX = 5;
  }
  harry.collide(edges[3]);
  if(cycloneGroup.isTouching(harry)){
    cycloneGroup.destroyEach();
  }
  //harry.collide(edges[2]);
  spawnHouses();
  spawnCyclones();
drawSprites();

}
function spawnHouses(){
 if (frameCount % 60 === 0){
   var house = createSprite(600,240,10,40);
   house.velocityX = -6;
   
    //generate random houses
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: house.addImage(house1Img);
              break;
      case 2: house.addImage(house2Img);
              break;
      case 3: house.addImage(house3Img);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    house.scale = 0.05;
    house.lifetime = 300;
   
   //add each obstacle to the group
   // obstaclesGroup.add(obstacle);
 }
}
function spawnCyclones() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var cyclone = createSprite(200,120,40,10);
    cyclone.x = Math.round(random(80,500));
    cyclone.addImage(cyclone_running);
    cyclone.scale = 0.1;
    cyclone.velocityY = 2;
    cyclone.lifetime = 150;
    cycloneGroup.add(cyclone)
  }
}
