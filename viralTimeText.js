function viralTimeText(){
    if (frameCount%20==0 ){
    textSize(55);
    noStroke();
    fill(200);
    textFont('VT323');
    text(timeText[j], width*.15, height*.75);
    j += 1;
    }
}