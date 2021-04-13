// import all dependencies from node_modules
const ffmpeg = require('ffmpeg');
const fabric = require("fabric").fabric;

var canvas;

function makeLayout(){
  // create a canvas element in the dom
  //let d = document.createElement('div')
  //d.style.cssText = "width: 100vw; height: 100vh; color: blue; border: 1px solid black; margin: 0; padding: 0;";
  let cols = document.createElement('div');
  cols.style = "flex-direction: row;"
  document.body.appendChild(cols);

  let col1 = document.createElement('div');
  col1.id = "canvas-wrapper";
  col1.style = "border: 1px solid; max-width: fit-content; height: 100%;"
  cols.appendChild(col1);

  let c = document.createElement('canvas')
  c.id = "c";
  col1.appendChild(c);

  // link to the canvas with fabric 
  canvas = new fabric.Canvas('c');
  canvas.setHeight(500);
  canvas.setWidth(500);

  // create a form element
  let form = document.createElement('form');
  col1.appendChild(form);

  // create the upload button
  let upload = document.createElement('input');
  upload.type = "file";
  upload.multiple = true;
  upload.onchange = () => encodeImageFileAsURL(upload);
  form.appendChild(upload);

  let expor = document.createElement('button');
  expor.textContent = "Export a video";
  //expor.addEventListener('click', downloadFiles, false);
  col1.appendChild(expor);

  // create a second column for the toolbar
  let col2 = document.createElement('div');
  col2.id = "canvas-wrapper";
  col2.style = "border: 1px solid; max-width: fit-content; height: 100%;"
  cols.appendChild(col2);

}

// Shamelessly harvested from: 
// https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript

function encodeImageFileAsURL(element) {
  var files = element.files;

  console.log("Files");
  console.log(files);

  var i;
  for (i = 0; i < files.length; i++) {
    // create a new file reader for each file 
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }

    // read the file
    reader.readAsDataURL(files[i]);
  }

}

function Upload(){

}

function addSquareToCanvas(){
  // test drawing a rectangle on the canvas
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
  });
  canvas.add(rect);

}

function toggleDrawingMode(){
  // set the canvas to be in drawing mode
  canvas.isDrawingMode = !(canvas.isDrawingMode)
}


function main(){
  makeLayout();
  //addSquareToCanvas();

  toggleDrawingMode();
}
main();
