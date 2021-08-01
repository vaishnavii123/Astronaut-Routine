var bath,brush,drink,eat,gym,iss,move,sleep;
var astronaut,background;

function preload(){
bath.loadAnimation("bath1.png,bath2.png");
brush.loadImage("brush.png");
drink.loadAnimation("drink1.png,drink2.png");
eat.loadAnimation("eat1.png,eat2.png");
gym.loadAnimation("gym1.png,gym2.png,gym11.png,gym12.png");
iss.loadImage("iss.png");
move.loadAnimation("move.png,move1.png");
sleep.loadImage("sleep.png");
}

function setup() {
  createCanvas(400, 400);

  background = createSprite(400,400);
  background.addImage(iss);

  astronaut = createSprite(300,300);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

}

function draw() {
  background(220);

  if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.x = 200;
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.x = 200;
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;  
  }

  if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.x = 200;
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }

  if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.x = 200;
  astronaut.y = 350;  
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }

  if(keyDown(m_button)){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.x = 200;
  astronaut.y = 350;  
  astronaut.velocityX = -3;
  astronaut.velocityY = -3; 
  }
 edges = createEdgesSprite;
 astronaut.bounceOff(edges);
}