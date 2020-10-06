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