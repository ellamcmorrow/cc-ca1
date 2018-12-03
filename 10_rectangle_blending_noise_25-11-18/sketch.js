//when b or w are pressed the backrgoud changes to black or white
'use strict';

var sketch = function( p ) {

  var agents = [];
  var agentCount = 20;
  var noiseScale = 100; //defines how close thogether the noise will be drawn, smaller value more squished together
  var noiseStrength = 200; // how random the angles will be , the more biger the number the more random
  var noiseZRange = 100;
  var noiseZVelocity = 0; //more fluid the lower the number
  var overlayAlpha = 60; //overlay strength of colour
  var agentAlpha = 90; // agents strength of colour
  var mouseX;
  var mouseY;
  var strokeWidth = 2;
  var mouseX;
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
      if (i % 2 == 0) {
      hueValues[i] = p.random(180,360);
      saturationValues[i] = p.random(50,100);
      brightnessValues[i] =100;
    }
    else if (i % 3 == 0) {
    hueValues[i] = p.random(200,280);
    saturationValues[i] = 100;
    brightnessValues[i] =p.random(100);
   }
     else {
      hueValues[i] =360;
      saturationValues[i] = 100;
      brightnessValues[i] = p.random(100);
     }
    }
  p.draw = function() {
    p.background(0,0,10);
    p.beginShape()
    p.background(0,0,10);
//    p.noStroke();
    p.randomSeed(actRandomSeed);
//    p.rect(0, 0, p.width, p.height); //the overlay is a rectangle
    // Draw agents
    p.beginShape()
    for (var i = 0; i < agentCount; i++) {
    p.stroke(p.random(10));
    //Blends the pixels in the display window according to the defined mode.
    //There is a choice of the following modes to blend the source pixels (A) with the ones of pixels already in the display window (B):
    p.blendMode(p.LIGHTEST);
    p.fill(hueValues[i], saturationValues[i], brightnessValues[i], p.random(60,90));
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
    }
    p.endShape();


    }


  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == 'b' || p.key == 'B') p.background(0,0,0);
    if (p.key == 'w' || p.key == 'W') p.background(255,255,255);

    if (p.key == 'n') {
      var newNoiseSeed = p.floor(p.random(10000));
      console.log('newNoiseSeed', newNoiseSeed); //return the same number each time the software is run
      p.noiseSeed(newNoiseSeed);
    }
  //  if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(0);
//  if (p.key == 'b') p.background(0);

  }
}
p.mouseReleased=function() {
  actRandomSeed = random(100000);
  loop();
}
};

var myp5 = new p5(sketch);
