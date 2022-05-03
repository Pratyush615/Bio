let bloodCells;
let MENU = true;
let START = false;
let BloodVessel;
function preload() {
  blood1 = loadImage("Images/B1.png");
  blood2 = loadImage("Images/B2.png");
  blood3 = loadImage("Images/B3.png");
  BV = loadImage("Images/bloodvessel.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  BloodVessel = createSprite(windowWidth / 2, windowHeight / 2, 100, 100);
  BloodVessel.addImage(BV);
  BloodVessel.scale = 4;
}
function draw() {
  background("maroon");

  if (MENU === true) {
    backgroundStart();
    drawingContext.filter = "blur(6px)";
  } else {
    drawingContext.filter = "blur(0px)";
  }

  if (START === true) {
    backgroundStart();
    drawingContext.filter = "blur(6px)";
  }

  drawSprites();
}
function backgroundStart() {
  if (frameCount % 10 === 0) {
    BloodCell = createSprite(1000, 200, 0.1, 0.1);

    x = Math.round(random(1, 4));
    if (x == 1) {
      BloodCell = createSprite(1000, 200, 20, 20);
      BloodCell.addImage(blood1);
      BloodCell.velocityX = -3;
      BloodCell.scale = 0.2;
    }
    if (x == 2) {
      BloodCell = createSprite(1000, 200, 20, 20);
      BloodCell.addImage(blood2);
      BloodCell.velocityX = -3;
      BloodCell.scale = 0.2;
    }
    if (x == 3) {
      BloodCell = createSprite(1000, 200, 20, 20);
      BloodCell.addImage(blood3);
      BloodCell.velocityX = -3;
      BloodCell.scale = 0.2;
    }
    BloodCell.y = Math.round(random(windowHeight-(windowHeight+30), windowHeight));
    BloodCell.velocityX = -7;
    BloodCell.setLifetime = 95;
    //BloodGroup.add(BloodCell)
  }
}
