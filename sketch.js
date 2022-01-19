var bee 
function setup()
{
createCanvas (400,400)
bee = createSprite(5,50,10,10)
bee.shapeColor = "yellow";

 cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
   cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
   cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
   cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
   cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
   cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
   cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
   cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
   cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
   cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
   cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
   cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
   cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
  cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
   cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
   cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
   cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
   cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
   cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
   cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
   cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";
  cardboard22 = createSprite(330,370,20,100);
   cardboard22.shapeColor = "brown";
   target = createSprite(395,375,10,50);
  target.shapeColor = "yellow";
}

function draw()
{
background("lightyellow")
Beemovement()
if (bee.isTouching(cardboard1)||bee.isTouching(cardboard2)||bee.isTouching(cardboard3)||bee.isTouching(cardboard4)||
bee.isTouching(cardboard5)||bee.isTouching(cardboard6)||bee.isTouching(cardboard7)||bee.isTouching(cardboard8)||
bee.isTouching(cardboard9)||bee.isTouching(cardboard10)||bee.isTouching(cardboard11)||bee.isTouching(cardboard12)||
bee.isTouching(cardboard13)||bee.isTouching(cardboard14)||bee.isTouching(cardboard15)||bee.isTouching(cardboard16)||
bee.isTouching(cardboard17)||bee.isTouching(cardboard18)||bee.isTouching(cardboard19)||bee.isTouching(cardboard20)||
bee.isTouching(cardboard21)||bee.isTouching(cardboard22)){
  bee.bounceOff(cardboard1)
  bee.bounceOff(cardboard2)
  bee.bounceOff(cardboard3)
  bee.bounceOff(cardboard4)
  bee.bounceOff(cardboard5)
  bee.bounceOff(cardboard6)
  bee.bounceOff(cardboard7)
  bee.bounceOff(cardboard8)
  bee.bounceOff(cardboard9)
  bee.bounceOff(cardboard10)
  bee.bounceOff(cardboard11)
  bee.bounceOff(cardboard12)
  bee.bounceOff(cardboard13)
  bee.bounceOff(cardboard14)
  bee.bounceOff(cardboard15)
  bee.bounceOff(cardboard16)
  bee.bounceOff(cardboard17)
  bee.bounceOff(cardboard18)
  bee.bounceOff(cardboard19)
  bee.bounceOff(cardboard20)
  bee.bounceOff(cardboard21)
  bee.bounceOff(cardboard22)
  

}

hunterGroup()
drawSprites()
}
function Beemovement(){
  if(keyDown(RIGHT_ARROW)){
    bee.x = bee.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    bee.x = bee.x-5;
  }
  if(keyDown(UP_ARROW)){
    bee.y = bee.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    bee.y = bee.y+5;
  }
}
function hunterGroup(){
  if(frameCount%80==0){
    hunter = createSprite(random(50,300),random(50,300),10,10)
    hunter.velocityX = -2;
    hunter.velocityY = -1;
  }
}