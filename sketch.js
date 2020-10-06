var fixedRect, movingRect, rectLife, YouJustGotRect
function preload(){
  
}
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "mouseY, mouseX, 6";
  fixedRect.debug = true;
  movingRect = createSprite(400, 300,80,30);
  rectLife = createSprite(200, 300,80,30);
  YouJustGotRect = createSprite(600, 300,80,30);
  movingRect.shapeColor = "7, mouseX, mouseY";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
//fixedRect.bounceOff = movingRect;
YouJustGotRect.y =mouseY;
YouJustGotRect.x = mouseX;
 if(isTouching(YouJustGotRect,rectLife)){
  YouJustGotRect.shapeColor = "7, mouseX, mouseY";
  rectLife.shapeColor = "0, mouseX, mouseY";
  //rectLife.velocityY = rectLife.velocityY * (-1);
  //YouJustGotRect.velocityY = YouJustGotRect.velocityY * (-1);

 }else{
  YouJustGotRect.shapeColor = "red";
  rectLife.shapeColor = "red";
 
 }
  drawSprites();
}

function isTouching(obect1, object2){
  if (obect1.x - object2.x < object2.width/2 + obect1.width/2
      && object2.x - obect1.x < object2.width/2 + obect1.width/2
      && obect1.y - object2.y < object2.height/2 + obect1.height/2
      && object2.y - obect1.y < object2.height/2 + obect1.height/2) {
       /* movingRect.shapeColor = "7, mouseX, mouseY";
        fixedRect.shapeColor = "0, mouseX, mouseY";
        fixedRect.velocityX = fixedRect.velocityX * (-1);
        movingRect.velocityX = movingRect.velocityX * (-1);*/
    return true;
  }else{
     return false;

  }
}