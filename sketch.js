
//creating variables .
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var wall24;
var wall25;
var wall26;
var wall27;
var wall28;
var wall29;
var wall30;
var wall31;
var wall32;
var wall33;
var wall34;
var wall35;
var wall36;
var wall37;
var wall38;
var wall39;
var wall40;
var wall41;
var wall42;
var wall43;
var wall44;
var wall45;
var wall46;
var wall47;
var wall48;
var wall49;
var wall50;
var prince, princess;









function preload() {
  //adding images .

  wallimage = loadImage("images/wall.jpg");
  princeimage = loadAnimation("images/prince1.png", "images/prince2.png");
  princessimage = loadImage("images/princess.png");
  backgroundimage = loadImage("images/background.jpg");





}


//creating walls .
function setup() {
  createCanvas(2000, 1000);

  wall1 = createSprite(100, 500, 30, 800);
  //wall1.addImage(wallimage);
  //wall1.shapeColor = "#228B22"
  wall2 = createSprite(1000, 100, 1830, 30);
  wall3 = createSprite(1900, 485, 30, 800);
  wall4 = createSprite(1000, 900, 1830, 30);
  wall5 = createSprite(260, 230, 300, 30);
  wall6 = createSprite(420, 415, 30, 400);
  wall7 = createSprite(200, 100, 600, 30);
  wall8 = createSprite(360, 600, 100, 30);
  wall9 = createSprite(295, 540, 30, 150);
  wall10 = createSprite(200, 590, 30, 250);
  wall11 = createSprite(400, 700, 400, 30);
  wall12 = createSprite(530, 540, 30, 300);
  wall13 = createSprite(585, 750, 30, 110);
  wall14 = createSprite(280, 800, 360, 30);
  wall15 = createSprite(475, 835, 30, 100);
  wall16 = createSprite(670, 800, 200, 30);
  wall17 = createSprite(970, 655, 30, 500);
  wall18 = createSprite(755, 560, 30, 500);
  wall19 = createSprite(790, 760, 100, 30);
  wall20 = createSprite(930, 650, 80, 30);
  wall21 = createSprite(800, 540, 80, 30);
  wall22 = createSprite(925, 420, 80, 30);
  wall23 = createSprite(927, 320, 375, 30);
  wall24 = createSprite(1100, 555, 30, 480);
  wall25 = createSprite(1175, 800, 180, 30);
  wall26 = createSprite(1250, 650, 30, 300);
  wall27 = createSprite(1385, 515, 250, 30);
  wall28 = createSprite(1380, 750, 30, 280);
  wall29 = createSprite(1495, 650, 30, 280);
  wall30 = createSprite(1560, 800, 160, 30);
  wall31 = createSprite(1650, 765, 30, 100);
  wall32 = createSprite(1760, 700, 250, 30);
  wall33 = createSprite(530, 320, 30, 200);
  wall34 = createSprite(580, 500, 100, 30);
  wall35 = createSprite(640, 560, 30, 150);
  wall36 = createSprite(690, 620, 130, 30);
  wall37 = createSprite(1790, 600, 30, 200);
  wall38 = createSprite(1700, 515, 380, 30);
  wall39 = createSprite(1680, 600, 220, 30);
  wall40 = createSprite(1560, 685, 30, 200);
  wall41 = createSprite(1420, 320, 700, 30);
  wall42 = createSprite(1755, 360, 30, 80);
  wall43 = createSprite(1500, 400, 540, 30);
  wall44 = createSprite(1300, 200, 1200, 30);
  wall45 = createSprite(250, 340, 120, 30);
  wall46 = createSprite(200, 300, 30, 110);
  wall47 = createSprite(300, 300, 30, 110);
  wall48 = createSprite(565, 300, 100, 30);
  wall49 = createSprite(1200, 150, 30, 100);
  wall50 = createSprite(700, 400, 80, 30);

  //creating prince .

  prince = createSprite(150, 180, 30, 30);
  prince.scale = 0.15;
  prince.addAnimation("prince", princeimage);

  //creating princess .

  princess = createSprite(1800, 800, 30, 30);
  princess.scale = 0.15;
  princess.addImage(princessimage);






}

function draw() {

  background(backgroundimage);

  //making the prince move .
  if (keyDown("left")) {

    prince.x = prince.x - 10;

  }
  if (keyDown("right")) {

    prince.x = prince.x + 10;

  }
  if (keyDown("up")) {

    prince.y = prince.y - 10;


  }
  if (keyDown("down")) {

    prince.y = prince.y + 10;


  }
  //bouncing off from walls .
  prince.bounceOff(wall1)






  drawSprites();


}
