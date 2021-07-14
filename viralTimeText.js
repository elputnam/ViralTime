function viralTimeText(){
    if (frameCount%19==0 ){
    textSize(55);
    noStroke();
    fill(200);
    textFont('VT323');
    text(timeText[j], width*.05, height*.75);
    j += 1;
    }
}