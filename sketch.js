let bloodCells;
let State = 1;
let BloodVessel;

let BloodCell = 1;
let WBloodCell = 1;

let blur = 10;
let audio = 1;
let audioBG = 1;
let q = 0;

let SBloodClicked = 0;
let Scells = [];
let once = 1;
let SBloodCell;
let SBloodCell2;
let SBloodCell3;
let SBloodCell4;
let SBloodCell5;

let a = 1;
let b = 1;
let c = 1;
let d = 1;
let e = 1;

let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;
let v5 = 0;

let again = 1;

function preload() {
  blood1 = loadImage("Images/B1.png");
  blood2 = loadImage("Images/B2.png");
  blood3 = loadImage("Images/B3.png");
  sickle = loadImage("Images/sicklecell.png");
  BV = loadImage("Images/bloodvessel.png");
  WBC = loadImage("Images/WBC.png");
  heartbeat = loadSound("Sounds/heartbeat.mp3");
  bgSong = loadSound("Sounds/BGsong.mp3");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  BloodVessel = createSprite(windowWidth / 2, windowHeight / 2, 100, 100);
  BloodVessel.addImage(BV);
  BloodVessel.scale = windowWidth * 0.002;
  heartbeat.play();

  BloodCellGroup = createGroup();
  SBloodCellGroup = createGroup();
  SBloodCell = createSprite(
    windowWidth + 50,
    random(windowHeight * 0.35, windowHeight * 0.58),
    20,
    20
  );
  SBloodCell2 = createSprite(
    windowWidth + 50,
    random(windowHeight * 0.35, windowHeight * 0.58),
    20,
    20
  );
  SBloodCell3 = createSprite(
    windowWidth + 50,
    random(windowHeight * 0.35, windowHeight * 0.58),
    20,
    20
  );
  SBloodCell4 = createSprite(
    windowWidth + 50,
    random(windowHeight * 0.35, windowHeight * 0.58),
    20,
    20
  );
  SBloodCell5 = createSprite(
    windowWidth + 50,
    random(windowHeight * 0.35, windowHeight * 0.58),
    20,
    20
  );

  SBloodCell.addImage(sickle);
  SBloodCell2.addImage(sickle);
  SBloodCell3.addImage(sickle);
  SBloodCell4.addImage(sickle);
  SBloodCell5.addImage(sickle);

  drawingContext.filter = "blur(" + blur + "px)";
  //
}
function draw() {
  background("rgb(107,2,2)");
  backgroundStart();
  document.getElementById("counter").innerHTML = SBloodClicked;

  //Removing all Cells if framerate falls too low
  if (State === 1) {
    if (heartbeat.isPlaying() != true) {
      heartbeat.play();
    }
  }
  if (State === 2) {
    backgroundStart();
    heartbeat.setVolume(audio);
    drawingContext.filter = "blur(" + blur + "px)";
    if (frameCount % 5 == 0) {
      blur = blur - 0.4;
      audio = audio - 0.05;
    }
    if (audio <= 0) {
      heartbeat.stop();
      //song.play
      if (bgSong.isPlaying() != true) {
        bgSong.play();
        bgSong.setVolume(0.055);
      }
    }

    if (blur <= 0) {
      blur = 0;
    }
  }
  if (a == 1) {
    if (mousePressedOver(SBloodCell)) {
      console.log(SBloodClicked);
      a = 0;
      SBloodCell.destroy();
      setTimeout(() => {
        SBloodClicked++;
        console.log(SBloodClicked);
      }, 2000);
    }
  }
  if (b == 1) {
    if (mousePressedOver(SBloodCell2)) {
      console.log(SBloodClicked);
      b = 0;
      SBloodCell2.destroy();
      setTimeout(() => {
        SBloodClicked++;
        console.log(SBloodClicked);
      }, 2000);
    }
  }
  if (c == 1) {
    if (mousePressedOver(SBloodCell3)) {
      console.log(SBloodClicked);
      c = 0;
      SBloodCell3.destroy();
      setTimeout(() => {
        SBloodClicked++;
        console.log(SBloodClicked);
      }, 2000);
    }
  }
  if (d == 1) {
    if (mousePressedOver(SBloodCell4)) {
      console.log(SBloodClicked);
      d = 0;
      SBloodCell4.destroy();
      setTimeout(() => {
        SBloodClicked++;
        console.log(SBloodClicked);
      }, 2000);
    }
  }
  if (e == 1) {
    if (mousePressedOver(SBloodCell5)) {
      console.log(SBloodClicked);
      e = 0;
      SBloodCell5.destroy();
      setTimeout(() => {
        SBloodClicked++;
        console.log(SBloodClicked);
      }, 2000);
    }
  }

  if (State === 3) {
    SBloodCell.velocityX = v1;
    SBloodCell2.velocityX = v2;
    SBloodCell3.velocityX = v3;
    SBloodCell4.velocityX = v4;
    SBloodCell5.velocityX = v5;

    drawingContext.filter = "blur(0px)";
    if (bgSong.isPlaying() != true) {
      bgSong.play();
      bgSong.setVolume(0.055);
    }
    push();
    if (again == 1) {
      again = 0;
      console.log(again);

      setTimeout(() => {
        v1 = random(-6, -7);
      }, 5000);
      setTimeout(() => {
        v2 = random(-6, -7);
      }, 10000);
      setTimeout(() => {
        v3 = random(-6, -7);
      }, 15000);
      setTimeout(() => {
        v4 = random(-6, -7);
      }, 20000);
      setTimeout(() => {
        v5 = random(-6, -7);
      }, 25000);
    }

    setTimeout(() => {
      State = 4;
    }, 70000);
    pop();
  }
  if (State == 4) {
    bgSong.stop();
  }
  drawSprites();
}
function backgroundStart() {
  if (frameCount % 20 === 0) {
    BloodCell = createSprite(windowWidth + 50, 200, 0.1, 0.1);

    x = Math.round(random(1, 3));
    y = Math.round(random(1, 6));

    if (x == 1) {
      push();
      translate(width / 2, height / 2);
      rotate(PI / 3.0);
      BloodCell = createSprite(
        windowWidth + 50,
        random(windowHeight * 0.35, windowHeight * 0.58),
        20,
        20
      );
      BloodCell.addImage(blood1);
      BloodCell.velocityX = random(-2, -5);
      BloodCell.scale = 0.2;
      pop();
    }
    if (x == 2) {
      push();
      translate(width / 2, height / 2);
      rotate(PI / 3.0);
      BloodCell = createSprite(
        windowWidth + 50,
        random(windowHeight * 0.35, windowHeight * 0.58),
        20,
        20
      );
      BloodCell.addImage(blood2);
      BloodCell.velocityX = random(-2, -5);
      BloodCell.scale = 0.2;
      pop();
    }
    if (x == 3) {
      push();
      rotate(PI / 3.0);
      BloodCell = createSprite(
        windowWidth + 50,
        random(windowHeight * 0.35, windowHeight * 0.58),
        20,
        20
      );
      BloodCell.addImage(blood3);
      BloodCell.velocityX = random(-2, -5);
      BloodCell.scale = 0.2;
      pop();
    }

    if (y == 1) {
      push();
      rotate(PI / 3.0);
      WBloodCell = createSprite(
        windowWidth + 50,
        random(windowHeight * 0.35, windowHeight * 0.58),
        20,
        20
      );
      WBloodCell.addImage(WBC);
      WBloodCell.scale = 0.2;
      pop();
    }
    BloodCell.y = Math.round(random(windowHeight * 0.35, windowHeight * 0.58));
    BloodCell.lifetime = 380;
    if (x == 1 || x == 2 || x == 3) {
      BloodCell.velocityX = random(-5, -8);
      BloodCell.rotationSpeed = random(1, 3);
    }

    WBloodCell.velocityX = random(-4.25, -5.95);
    WBloodCell.rotationSpeed = random(1, 3);

    BloodCell.scale = BloodCell.scale * random(0.95, 1.1);
    BloodCellGroup.add(BloodCell);
  }
}
