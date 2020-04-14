var girl,girl_standing,girl_dancing;
function preload(){
girl_standing = loadImage("animated_girl.jpg");
girl_dancing = loadImage("girl_dancing.png");
}

function setup() {
  createCanvas(400, 400);
  girl = createSprite(200,180,20,50);
  girl.addAnimation("standing", girl_standing);
  girl.addAnimation("dancing",girl_dancing);
  girl.scale = 0.5;
}

function draw() {
  background(300);
  girl.x = World.mouseX;
  if(mousePressedOver(girl)){
    girl.changeAnimation("dancing",girl_dancing);
  }
  drawSprites();
}