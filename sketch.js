
var fixedRect, movingRect;
var gameObject1, gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(500, 500, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200,200,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,300,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,400,50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject4.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




