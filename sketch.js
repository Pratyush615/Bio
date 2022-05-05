let bloodCells;
let State = 1;
let BloodVessel;
let BloodCell=1;
let blur = 10;
let audio = 1;
let audioBG = 1;

function preload() {
  blood1 = loadImage("Images/B1.png");
  blood2 = loadImage("Images/B2.png");
  blood3 = loadImage("Images/B3.png");
  BV = loadImage("Images/bloodvessel.png");
  WBC = loadImage("Images/WBC.png")
  heartbeat = loadSound('Sounds/heartbeat.mp3');
  bgSong = loadSound("Sounds/BGsong.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  BloodVessel = createSprite(windowWidth/2, windowHeight/2, 100, 100);
  BloodVessel.addImage(BV);
  BloodVessel.scale = windowWidth*0.005
  heartbeat.play()
  drawingContext.filter = "blur("+blur+"px)";

  //

}
function draw() {
  background("rgb(107,2,2)");
  backgroundStart();
  
  if (State === 1) {
    
    if(heartbeat.isPlaying()!=true){
      heartbeat.play()
    }
    
  }
  if (State === 2) {
    backgroundStart();
    heartbeat.setVolume(audio)
    drawingContext.filter = "blur("+blur+"px)";
    if(frameCount%5==0){
      blur=blur-0.4
      audio=audio-0.05
    }
    if(audio <= 0){
      heartbeat.stop()
      //song.play
      if(bgSong.isPlaying()!=true){
      bgSong.play()
      bgSong.setVolume(0.055)
      }
    }
    
    
    if(blur<=0){
      blur=0
    }
  }
  drawSprites();
  
}
function backgroundStart() {
  if (frameCount % 20 === 0) {
    BloodCell = createSprite(windowWidth+50, 200, 0.1, 0.1);

    x = Math.round(random(1, 3));
    y = Math.round(random(1, 6));

    if (x == 1) {
      push()
      translate(width / 2, height / 2);
      rotate(PI / 3.0);
      BloodCell = createSprite(windowWidth+50, random(windowHeight*0.35, windowHeight*0.58), 20, 20);
      BloodCell.addImage(blood1);
      BloodCell.velocityX = random(-2,-5);
      BloodCell.scale = 0.2;
      pop()
    }
    if (x == 2) {
      push()
      translate(width / 2, height / 2);
      rotate(PI / 3.0);
      BloodCell = createSprite(windowWidth+50, random(windowHeight*0.35, windowHeight*0.58), 20, 20);
      BloodCell.addImage(blood2);
      BloodCell.velocityX = random(-2,-5);
      BloodCell.scale = 0.2;
      pop()
    }
    if (x == 3) {
      push()
      rotate(PI / 3.0);
      BloodCell = createSprite(windowWidth+50, random(windowHeight*0.35, windowHeight*0.58), 20, 20);
      BloodCell.addImage(blood3);
      BloodCell.velocityX = random(-2,-5);
      BloodCell.scale = 0.2;
      pop()
    }
    /* (x == 4) {
      push()
      rotate(PI / 3.0);
      BloodCell = createSprite(windowWidth+50, random(windowHeight*0.35, windowHeight*0.58), 20, 20);
      BloodCell.addImage(blood3);
      BloodCell.velocityX = random(-2,-5);
      BloodCell.scale = 0.2;
      pop()
    }*/
  
    if (y == 1) {
      push()
      rotate(PI / 3.0);
      BloodCell = createSprite(windowWidth+50, random(windowHeight*0.35, windowHeight*0.58), 20, 20);
      BloodCell.addImage(WBC);
 
     BloodCell.velocityX = random(-0.9,-3.25);
      BloodCell.scale = 0.2;
      pop()
    }
    BloodCell.y = Math.round(random(windowHeight*0.35, windowHeight*0.58));
    BloodCell.velocityX = -7;
    BloodCell.lifetime = 200;
    BloodCell.rotationSpeed = random(1,3);
    BloodCell.scale = BloodCell.scale*random(0.95,1.10)
    //BloodGroup.add(BloodCell)
  }
}
