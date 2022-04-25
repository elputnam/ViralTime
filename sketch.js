let phrase = ['Time' ,'is' , 'glitchy'];
let i;
let link;
let start; 
let link1;
let link2;
let link3;

let timeText;

function preload() {
  timeText = loadStrings('viralTime.txt');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(20);
  //frameRate(10);
  i = 0;
  j = 0;
  //link = createA('http://127.0.0.1:5501/SlidingScreens/','');
  link1 = createA('https://elputnam.github.io/PeatBramble/', '');
  link2 = createA('https://elputnam.github.io/GlibDrive/', '');
  link3 = createA('https://elputnam.github.io/AtTheEndOf/', '');
  //start = createButton('Start').parent(link); 
}

function draw() {
  console.log(frameCount);
  let choice = int(random(1, 3));;  
  if ( choice == 1){
      link = link1;
      }
  if (choice == 1){
      link = link2;
    }  
  if (choice == 3){
    link = link3;
  }

  if (frameCount > 150){
    viralTimeText();
  }

  if (frameCount < 1500){
      background(random(30), 10);
      viralTime();
      
  } else if (frameCount > 1500){
      timeisGlitchy();
      //start = createButton('Next').parent(link); 
      //start.position(width*.1, height*.75); 
  } else if (frameCount >= 2500) {
      frameCount = 0;
    }
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }