// import all dependencies from node_modules
const ffmpeg = require('ffmpeg');
const fabric = require("fabric").fabric;

var canvas;
var frames;

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

  // Some great documentation on accessing a FileList object in the browser:
  // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications

  //https://ourcodeworld.com/articles/read/1438/how-to-read-multiple-files-at-once-using-the-filereader-class-in-javascript
  const inputElement = upload;
  inputElement.addEventListener("change", handleFiles, false);

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


function main(){
  makeLayout();
  //addSquareToCanvas();
  toggleDrawingMode();

  // Calculate the dimensions of the first frame

  // Set the background of canvas to the first frame

  // Set the number of frames in the slider to be correct

   

}
main();
