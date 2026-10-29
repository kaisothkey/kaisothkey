function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(220);

//shirt
 fill(100, 110, 120);
  noStroke();
  rect(230, 480, 140, 120);
  rect(50, 520, 500, 80, 40, 40, 0, 0);    

//back of hair
 fill(0);
  noStroke();
  rect(190, 360, 220, 130, 10);
  triangle(190, 480, 220, 510, 240, 480);
  triangle(410, 480, 380, 510, 360, 480);

//head
 fill(250, 220, 205);
  noStroke();
  ellipse(300, 280, 430, 440); 
  arc(300, 360, 340, 260, 0, PI);

//hair
fill(0); 
  noStroke();
  //tuck under beanie
  triangle(90, 195, 125, 195, 105, 310);   //left side
  triangle(105, 195, 135, 195, 120, 280);  
  
  triangle(510, 195, 475, 195, 495, 310); //right side
  triangle(495, 195, 465, 195, 480, 280);   

  triangle(160, 195, 210, 195, 185, 230); 
  triangle(390, 195, 440, 195, 415, 230); 

//beanie
  noStroke();
  
//top of beanie
  fill(45, 45, 45);
  arc(300, 195, 435, 280, PI, TWO_PI); 
  
//beanie cuff
  fill(25, 25, 25);
  rect(100, 155, 400, 55, 25); 

//earbuds

  fill(255);
  noStroke();
  circle(90, 245, 24);  // left
  circle(510, 245, 24); // right
  
// hanging wire
  stroke(245);
  strokeWeight(6);
  noFill();
  
// left wire
  bezier(90, 245, 60, 320, 90, 450, 140, 520);
  
//right wire
  bezier(510, 245, 540, 320, 510, 450, 460, 520);
 
//eyes
fill(0);
noStroke();
circle(200, 285, 24)
circle(400, 285, 24)

//glasses
  stroke (50, 50, 50);
  strokeWeight(12);
  noFill();
  rect(135, 215, 135, 135, 24);
  rect(330, 215, 135, 135, 24);
  line(270, 285, 330, 285);

//mouth
  stroke(0)
  strokeWeight(9)
  line(225, 435, 375, 435)

}
  
