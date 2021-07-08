let phrase = ['Time' ,'is' , 'glitchy'];
let i;
let link;
let start; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //frameRate(10);
  i = 0;
  link = createA('http://127.0.0.1:5501/SlidingScreens/','');
  start = createButton('Start').parent(link); 
}

function draw() {
  if (frameCount < 500){
    background(random(30), 10);
    viralTime();
  }

  if (frameCount >= 500){
    timeisGlitchy();
    start.position(width*.25, height*.75);
  }
}
