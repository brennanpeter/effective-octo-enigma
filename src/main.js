// import all dependencies from node_modules
const ffmpeg = require('ffmpeg');
const fabric = require("fabric").fabric;

var canvas;
var frames;

// add the import and export buttons to the screen
function addImportExportButtons(col1){

  // create a form element
  let form = document.createElement('form');
  col1.appendChild(form);

  let importExportFlexbox = document.createElement('div');
  importExportFlexbox.style = "flex-direction: col;"
  document.body.appendChild(importExportFlexbox);

  // create the upload button
  let upload = document.createElement('input');
  upload.type = "file";
  upload.multiple = true;

  // Some great documentation on accessing a FileList object in the browser:
  // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications

  //https://ourcodeworld.com/articles/read/1438/how-to-read-multiple-files-at-once-using-the-filereader-class-in-javascript
  const inputElement = upload;
  inputElement.addEventListener("change", handleFiles, false);

  importExportFlexbox.appendChild(upload);

  let expor = document.createElement('button');
  expor.textContent = "Export a video";
  //expor.addEventListener('click', downloadFiles, false);
  importExportFlexbox.appendChild(expor);

}

function addToolbarColumns(){
  // create two flexbox columns 
  let cols = document.createElement('div');
  cols.style = "flex-direction: row;"
  document.body.appendChild(cols);

  // left column div
  let col1 = document.createElement('div');
  col1.id = "canvas-wrapper";
  col1.style = "border: 1px solid; max-width: fit-content; height: 100%;"
  cols.appendChild(col1);

  // create a second column for the toolbar
  let col2 = document.createElement('div');
  col2.id = "canvas-wrapper";
  col2.style = "border: 1px solid; max-width: fit-content; height: 100%;"
  cols.appendChild(col2);
  return cols 
}

function initializeCanvas(col1){
  // create a canvas element and add it to the left column
  let c = document.createElement('canvas')
  c.id = "c";
  col1.appendChild(c);

  // link to the canvas with fabric 
  canvas = new fabric.Canvas('c');
  canvas.setHeight(500);
  canvas.setWidth(500);

}

function makeLayout(){
  let cols = addToolbarColumns();
  let col1 = cols.childNodes[0];
  let col2 = cols.childNodes[1];

  initializeCanvas(col1);

  addImportExportButtons(col1);

}

function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  let readers = [];
  // Abort if there were no files selected
  if(!fileList.length) return;

  // Store promises in array
  for(let i = 0;i < fileList.length;i++){
    readers.push(readFile(fileList[i]));
  }

  Promise.all(readers).then((values) => {
    console.log(values);
    frames = values;
  });
  console.log("Files handled");

}

// this read function with promises was copied from
// https://ourcodeworld.com/articles/read/1438/how-to-read-multiple-files-at-once-using-the-filereader-class-in-javascript
function readFile(file){
  return new Promise(function(resolve,reject){
    let fr = new FileReader();

    fr.onload = function(){
      resolve(fr.result);
    };

    fr.onerror = function(){
      reject(fr);
    };

    fr.readAsDataURL(file);
  });
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

function setBackground(){
  
}

function main(){
  makeLayout();
  addSquareToCanvas();
  toggleDrawingMode();

  setBackground();

}
main();
