var headX;

var headY;

// int frogPre1;
var headW, headH;

var eyeDistance;

var eyeW, eyeH;
var pupilW, pupilH;


var eyeVar;

function setup() {
   headX = 0;
    headY = 0;
    headW = 0;
    headH = 0;
    eyeDistance = 0;
    eyeW = 0;
    eyeH = 0;
    eyeVar = 0;

   var myCanvas = createCanvas(200, 200);
    myCanvas.parent("frog_generator");
  
    initializeFields();
    //createCanvas(400, 400);
    headX = width / 2;
    headY = height / 2;
 
   
    eyeVar = random(2.5, 6);
  headW = random(width/4, height);
    headH = random(50, height/1.3);
    eyeDistance = random(10, headW / 3);
    eyeW = random(eyeDistance/4, 50);
    eyeH = random(10, 50);
    pupilW = random(5,20);
    pupilH = random(5,20);
    fill(random(85, 255), random(194, 252), random(0, 255));
   
 ellipseMode(CENTER);
    // noStroke();
    strokeWeight(3);
    ellipse(headX, headY, headW, headH);
    // left eye
    ellipse(headX - eyeDistance, headY - (headH / 2), eyeW, eyeH);
    ellipse(headX - eyeDistance, headY - (headH / 2), pupilW, pupilH);
    // right eye
    ellipse(headX + eyeDistance, headY - (headH / 2), eyeW, eyeH);
    ellipse(headX + eyeDistance, headY - (headH / 2), pupilW, pupilH);
    // mouth
    line(headX - (eyeDistance + 10), headY, headX + eyeDistance + 10, headY);
    // nose
    line(headX - 10, headY - (headH / eyeVar), headX - 10, (headY - (headH / eyeVar) + 5));
    line(headX + 10, headY - (headH / eyeVar), headX + 10, (headY - (headH / eyeVar) + 5));
  
  
}
function touchStarted(){
   // name
    clear();

     headW = random(width/4, height);
    headH = random(50, height/1.3);
    eyeDistance = random(10, headW / 3);
    eyeW = random(eyeDistance/4, 50);
    eyeH = random(10, 50);
    pupilW = random(5,20);
    pupilH = random(5,20);
    
   
   fill(random(85, 255), random(194, 252), random(0, 255));
  
 ellipseMode(CENTER);
    // noStroke();
    strokeWeight(3);
    ellipse(headX, headY, headW, headH);
    // left eye
    ellipse(headX - eyeDistance, headY - (headH / 2), eyeW, eyeH);
    ellipse(headX - eyeDistance, headY - (headH / 2), pupilW, pupilH);
    // right eye
    ellipse(headX + eyeDistance, headY - (headH / 2), eyeW, eyeH);
    ellipse(headX + eyeDistance, headY - (headH / 2), pupilW, pupilH);
    // mouth
    line(headX - (eyeDistance + 10), headY, headX + eyeDistance + 10, headY);
    // nose
    line(headX - 10, headY - (headH / eyeVar), headX - 10, (headY - (headH / eyeVar) + 5));
    line(headX + 10, headY - (headH / eyeVar), headX + 10, (headY - (headH / eyeVar) + 5));
    // name
 
  
}

function draw() {}
  
function initializeFields() {
   
    
}


