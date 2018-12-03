//when b or w are pressed the backrgoud changes to black or white
'use strict';

var sketch = function( p ) {

  var agents = [];
  var agentCount = 2000;
  var noiseScale = 100; //defines how close thogether the noise will be drawn, smaller value more squished together
  var noiseStrength = 15; // how random the angles will be , the more biger the number the more random
  var noiseZRange = 0.2;
  var noiseZVelocity = 0.001; //more fluid the lower the number
  var overlayAlpha = 60; //overlay strength of colour
  var agentAlpha = 90; // agents strength of colour
  var strokeWidth = 0.2;
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

    p.noStroke(); //overlay stroke
    p.rect(0, 0, p.width, p.height); //the overlay is a rectangle
    // Draw agents
    for (var i = 0; i < agentCount; i++) {
      if (drawMode == 1) {
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      //  p.stroke(1,214,234, agentAlpha); //light blue
        p.stroke(hueValues[i] = p.random(165,185),saturationValues[i] = p.random(80,100), brightnessValues[i] = 92);
        p.fill(0,0,50,p.random(0,1)); //overlay color
      /* colour palette  RGB */
      // p.stroke(1,214,234, agentAlpha); //light blue <-- HSB --> 185,100,92
      //  p.stroke(71,227,88, agentAlpha); //full green <--HSB--> 127,69,89
      //  p.stroke(221,226,1, agentAlpha); //yellowy <-HSB-> 61,100,89
      //  p.stroke(241,89,67, agentAlpha); //red <--HSB--> 8,72,95
      //  p.stroke(222,0,218, agentAlpha); //magenta  <--HSB--> 301,100,87
      //  p.stroke(126,68,119, agentAlpha); //dark purple <--HSB--> 273,100,85
      //  p.stroke(80,75,233, agentAlpha); //dark blue <--HSB--> 243,68,91
      /* colour palette  HSB */
      //
      } else if(drawMode==2) {
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.stroke(hueValues[i] = p.random(107,127), saturationValues[i] = p.random(49,69), brightnessValues[i] =90);
        //p.fill(0,0,0,0.1 ); //overlay color

    }
    else if(drawMode==3){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(hueValues[i] = p.random(55,60), saturationValues[i] = p.random(95,100), brightnessValues[i] = 89); //yellow
    }

    else if(drawMode==4){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(hueValues[i] = p.random(0,20), saturationValues[i] = p.random(62,72), brightnessValues[i] = 80);
    }
    else if(drawMode==5){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(hueValues[i] = p.random(280,300), saturationValues[i] = p.random(80,100), brightnessValues[i] = 87);

    }

    else if(drawMode==6){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(hueValues[i] = p.random(255,275), saturationValues[i] = p.random(80,100), brightnessValues[i] = 85);
    }
    else if(drawMode==7){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(hueValues[i] = p.random(222,242), saturationValues[i] = p.random(50,68), brightnessValues[i] = 91);
    //  p.fill(249, 10,177, 0.01 ); //overlay color
        }
      }
    }


  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');

    if (p.key == 'b' || p.key == 'B') p.background(0,0,0);
    if (p.key == 'w' || p.key == 'W') p.background(255,255,255);

    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    if (p.key == '3') drawMode = 3;
    if (p.key == '4') drawMode = 4;
    if (p.key == '5') drawMode = 5;
    if (p.key == '6') drawMode = 6;
    if (p.key == '7') drawMode = 7;


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
