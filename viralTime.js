//Viral Time
function viralTime() {
  //glitch thob
  if (frameCount%6==0){
    let num = 20;
    push();
    translate(width / 2, height / 2);
    let cir = (360 / num) * (frameCount % num);
    rotate(radians(random(cir)));
    noStroke();
    fill(random(150, 300), random(360), random(360), 50);
    circle(width*.1, 0, width*.07);
    pop();

  //wobbly lines
  stroke(random(0, 100), 100, 360);
  line(random(100), 0, random(100), height);
  line(width - random(200), 0, width - random(200), height);
  line(0, random(200), width, random(200));
  line(0, height - random(200), width, height - random(200));
    }
  }