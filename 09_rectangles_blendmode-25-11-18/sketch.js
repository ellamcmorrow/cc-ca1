//when b or w are pressed the backrgoud changes to black or white
'use strict';

var sketch = function( p ) {

  var agents = [];
  var agentCount = 20;
  var noiseScale = 10; //defines how close thogether the noise will be drawn, smaller value more squished together
  var noiseStrength = 200; // how random the angles will be , the more biger the number the more random
  var noiseZRange = 100;
  var noiseZVelocity = 2; //more fluid the lower the number
  var overlayAlpha = 60; //overlay strength of colour
  var agentAlpha = 90; // agents strength of colour
  var mouseX;
  var mouseY;
  var strokeWidth = 20;
  var mouseX;
  var drawMode=1;
  var hueValues = [];
  var saturationValues = [];
  var brightnessValues = [];
  var key= key;
  var actRandomSeed = 0; //initialize act random seed value

  p.setup = function() {
   p.background(0,0,0);
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);

    for(var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);
      hueValues[i] = p.random(360);
      saturationValues[i] = 100;
      brightnessValues[i] =100;

}
  p.draw = function() {
    p.background(0,0,10);
    p.beginShape()
    p.background(0,0,10);

    // Draw agents
    for (var i = 0; i < agentCount; i++) {
    p.noStroke();//Blends the pixels in the display window according to the defined mode.
    //There is a choice of the following modes to blend the source pixels (A) with the ones of pixels already in the display window (B):
    p.blendMode(p.LIGHTEST);// only the lightest colour succeeds: C = max(A*factor, B).
    p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);

     if(drawMode==2) {
          p.blendMode(p.DARKEST);// only the lightest colour succeeds: C = max(A*factor, B).
          agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
          p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));

        }
        else if(drawMode==3){
        p.blendMode(p.BLEND);// only the lightest colour succeeds: C = max(A*factor, B).
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));

        }
        else if(drawMode==4){
        p.blendMode(p.MULTIPLY);// only the lightest colour succeeds: C = max(A*factor, B).
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        }
        else if(drawMode==5){
        p.blendMode(p.OVERLAY);// only the lightest colour succeeds: C = max(A*factor, B).
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        }
        else if(drawMode==6){
        p.blendMode(p.EXCLUSION);// only the lightest colour succeeds: C = max(A*factor, B).
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        }
        else if(drawMode==7){
        p.blendMode(p.SOFT_LIGHT);// only the lightest colour succeeds: C = max(A*factor, B).
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        }
        else if(drawMode==8){
        p.blendMode(p.BURN);// only the lightest colour succeeds: C = max(A*factor, B).
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        }
    }



  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == 'b' || p.key == 'B') p.background(0,0,0);
    if (p.key == 'w' || p.key == 'W') p.background(0,100,100);

    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    if (p.key == '3') drawMode = 3;
    if (p.key == '4') drawMode = 4;
    if (p.key == '5') drawMode = 5;
    if (p.key == '6') drawMode = 6;
    if (p.key == '7') drawMode = 7;
    if (p.key == '8') drawMode = 8;

        }

    }
}
}

var myp5 = new p5(sketch);
