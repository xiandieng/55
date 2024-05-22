let num = 100;
let mx = [];
let my = [];
let irisColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB);
  irisColor = (0,0,0);
}


function draw() {
  background('#d9d9db');
  let count = frameCount % num;
  // print(count);
  // frameRate(5);
  mx[count] = mouseX;
  my[count] = mouseY;
  for(let i=0 ; i<num ;i++){
    let index = (count + i) % num;
   
    
  fill(255);
  let eyeballX = constrain(mouseX,0,width);
  let eyeballY = constrain(mouseY,0,height);
  circle(mx[index],my[index],i)
  circle(eyeballX,eyeballY,200);
  // circle(width/2,height/2,200);
  fill(0);
  // cinstrain(n,low,high);
  let irisX = constrain(mouseX,eyeballX-30,eyeballX+30);
  let irisY = constrain(mouseY,eyeballY-30,eyeballY+30);
  fill(irisColor);
  circle(irisX,irisY,i);
  fill(0);
  //glare
  fill(255);
  circle(irisX+20,irisY-20,20);
  
  }
  
  
}
  
function mouseMoved(){
  irisColor = color(random(180,216),100,73);
}