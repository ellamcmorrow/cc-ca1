//when b or w are pressed the backrgoud changes to black or white
'use strict';

var sketch = function( p ) {

  var agents = [];
  var agentCount = 200;
  var noiseScale = 10; //defines how close thogether the noise will be drawn, smaller value more squished together
  var noiseStrength = 2; // how random the angles will be , the more biger the number the more random
  var noiseZRange = 0;
  var noiseZVelocity = 0.0; //more fluid the lower the number
  var overlayAlpha = 60; //overlay strength of colour
  var agentAlpha = 90; // agents strength of colour
  var mouseX;
  var mouseY;
  var strokeWidth = 2;
  var drawMode = 1;
  var mouseX;
  var hueValues = [];
  var saturationValues = [];
  var brightnessValues = [];
  var key= key;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);

    for(var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);
      hueValues[i] = p.random(185);
      saturationValues[i] = p.random(77);
      brightnessValues[i] = p.random(99);
    }
  }

  p.draw = function() {
    p.beginShape()
    p.noStroke(); //overlay stroke
    p.rect(0, 0, p.width, p.height); //the overlay is a rectangle
    // Draw agents
    p.beginShape()
    for (var i = 0; i < agentCount; i++) {
    p.stroke(p.random(0));
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
    }
    p.endShape();


    }


  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');

    if (p.key == 'b' || p.key == 'B') p.background(0,0,0);
    if (p.key == 'w' || p.key == 'W') p.background(255,255,255);

    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;



    if (p.key == 'n') {
      var newNoiseSeed = p.floor(p.random(10000));
      console.log('newNoiseSeed', newNoiseSeed); //return the same number each time the software is run
      p.noiseSeed(newNoiseSeed);
    }
  //  if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(0);
//  if (p.key == 'b') p.background(0);

  }

};

var myp5 = new p5(sketch);
