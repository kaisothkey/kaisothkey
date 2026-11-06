//note: use ctrl/Cmd + t to auto format your code (indentations)

var img;
//var img2;
//var img3;
var initials ='kk'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

let undoHistory = [];
let maxUndos = 20;

function preload() {
  // preload() runs once, it may make you wait
 
}

function setup() {
  createCanvas(600, 600);  // canvas size
  background(screenbg);   // use our background screen color

  button = createButton('clear canvas');
  button.position(500, 645);
  //call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  //call saveme() when the button is pressed
  button.mousePressed(saveme);
  
  button = createButton('undo');
  button.position(500, 595);
  button.mousePressed(undoLast);
  
  button = createButton('help text');
  button.position(500, 670);
  //call helptext() when the button is pressed
  button.mousePressed(helpText);
  
  //want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  //use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
  
  helpText();
  
}

function draw() {
  
  if (keyIsPressed) {
    choice = key;
  }
  if (mouseIsPressed) {
    newkeyChoice(choice); 
  }
}

function mousePressed() {

  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    saveState();
  }
}

function saveState() {

  undoHistory.push(get());
  
  // Keep history size under control
  if (undoHistory.length > maxUndos) {
    undoHistory.shift(); 
  }
}

function undoLast() {
  if (undoHistory.length > 0) {
    
    let lastState = undoHistory.pop();
    image(lastState, 0, 0);
  }
}
function newkeyChoice(toolChoice) {
  if (toolChoice == '1' ) {  // pink pen

   stroke('#fae');
  strokeWeight(5);
  
  drawingContext.setLineDash([])
  drawingContext.shadowBlur = 0;
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '2') { // neon blue highlight

     stroke('#00f0ff44');
  strokeWeight(15);
  strokeCap(ROUND);
  drawingContext.shadowBlur = 0;
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // yellow dashed

     stroke('#fff000');
  strokeWeight(10);
 drawingContext.setLineDash([10, 15])
 drawingContext.shadowBlur = 0;
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // red blur

    drawingContext.setLineDash([])
    
    stroke('#ff0033');
    strokeWeight(9);
    strokeCap(ROUND);
    
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = color('#ff0033');
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // matcha diamond
    fill('#00ffcc');
    noStroke();
     drawingContext.shadowBlur = 0;
    quad(
    mouseX, mouseY - 15, // Top vertex
    mouseX + 10, mouseY, // Right vertex
    mouseX, mouseY + 15, // Bottom vertex
    mouseX - 10, mouseY  // Left vertex
  );
  } else if (toolChoice == '6') { // square
  drawingContext.shadowBlur = 0;

    stroke(0);
    strokeWeight(0.5);
    fill(0);
    
    rectMode(CENTER);
    
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '7') { // mocha circles
 drawingContext.shadowBlur = 0;

    stroke(163, 131, 109);
    fill(163, 131, 109);
    
    circle(mouseX, mouseY, 20);
    
  } else if (toolChoice == '8') { // 

    stroke(180, 160, 230);
    strokeWeight(15);
    strokeJoin(ROUND);
    strokeCap(ROUND);
    
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else if (toolChoice == '9') { // dual color

  drawingContext.shadowBlur = 0;
    strokeJoin(ROUND);
    strokeCap(ROUND);

    stroke(90, 40, 110, 150);
    strokeWeight(22);        
    line(pmouseX, pmouseY, mouseX, mouseY);

    
    stroke(255, 105, 180, 220);
    strokeWeight(8);     
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else if (toolChoice == '0') { //eraser

  push();
  drawingContext.shadowBlur = 0; 
  drawingContext.setLineDash([]); 

  stroke(screenbg); //
  strokeWeight(35); 
  strokeCap(ROUND);
  
  line(mouseX, mouseY, pmouseX, pmouseY);
  
  pop();
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

    image(img, mouseX, mouseY, mouseX/10, mouseX/16); //what does this do?
    //  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    //    image(img2, mouseX-25, mouseY-25, 50, 50,20);
    //  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    //    image(img3, mouseX-25, mouseY-25, 50, 50,20);
  } //else if (toolChoice == 'x' || key == 'X') {

  //clearflag = 1;

  //} 
  else if (key == 'p' || key == 'P') {

    saveme();  // call saveme which saves an image of the screen
  }

  function testbox(r, g, b) {
    // this function is called in brush #5
    x = mouseX;
    y = mouseY;
    fill(r, g, b);
    rect(x-50, y-50, 100, 100);
  }
}

function clear_print() {
  // clears the screen by resetting the background
  background(screenbg); // set the screen back to the background color
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}

function keyPressed() { //https://p5js.org/reference/p5/keyPressed/
  if (key === 'x' || key === 'X') {
    clear_print();
  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText(){
  fill("black");
  strokeWeight(0.2);
  textSize(15);
  text('press numerical keys from 1 - 0 for different strokes', 60, 30);
  text('use buttons to save or clear canvas, or press x or p', 60, 45);
  text('try g for secret bonus', 60, 60);
  
}
