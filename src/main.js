// import all dependencies from node_modules
const fs = require('fs');
const { createFFmpeg, fetchFile } = require('ffmpeg');
const fabric = require("fabric").fabric;

// create a canvas element in the dom
//let d = document.createElement('div')
//d.style.cssText = "width: 100vw; height: 100vh; color: blue; border: 1px solid black; margin: 0; padding: 0;";
let d = document.createElement('div')
d.id = "wrapper";
d.style = "border: 1px solid; max-width: fit-content; height: 100%;"
document.body.appendChild(d);

let c = document.createElement('canvas')
c.id = "c";
d.appendChild(c);

// link to the canvas with fabric 
var canvas = new fabric.Canvas('c');
canvas.setHeight(500);
canvas.setWidth(500);


var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  angle: 45
});

canvas.add(rect);

canvas.isDrawingMode = true;


