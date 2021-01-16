// import all dependencies from node_modules
const fs = require('fs');
const { createFFmpeg, fetchFile } = require('ffmpeg');
const fabric = require("fabric").fabric;

// test that browserify is working
var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));

// create a canvas element in the dom
let d = document.createElement('div')
d.style.cssText = "width: 100vw; height: 100vh; color: blue; border: 1px solid black; margin: 0; padding: 0;";
document.body.appendChild(d);
let c = document.createElement('canvas')
c.style.cssText = "width: 500px; height: 500px; border: 1px solid black";
d.appendChild(c);

// link to the canvas with fabric 
var canvas = new fabric.Canvas('c');
var rect = new fabric.Rect();

canvas.add(rect);

