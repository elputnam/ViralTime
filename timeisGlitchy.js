function timeisGlitchy(){
  background(random(360), 100, 100, 5);
  textSize(random(10, 100))
  noStroke()
  fill(random(255))
  textFont('VT323');
  text(phrase[i], random(width), random(height));
  i += 1;
  if (i >= 3){
    i = 0;
  }
}