let color_picker;
let erase;
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  for (let element of document.getElementsByClassName("p5Canvas")) {
    element.addEventListener("contextmenu", (e) => e.preventDefault());
  }
  video = createCapture(VIDEO)
  video.hide()
  color_picker = createColorPicker("BLACK");
  color_picker.class('color')
  clearButton = createButton("CLEAR")
  clearButton.class("clearBtn")
  clearButton.mousePressed(clearCanvas);
  clearButton.class('Clear')
  let saveBtn = createButton("SAVE");
  saveBtn.mousePressed(saveToFile);
  saveBtn.class("saveBtn");
  let phto = createButton("DOODLE ON YOUR FACE");
  phto.mousePressed(takephoto);
  phto.class("phto");
}

function takephoto(){
  videoOn=true;
       if(videoOn==true)
     {
        image(video,0,0,width,height)
     }
     
 }


function draw() {
  var size = document.getElementById('brushSize').value;
  
  if (mouseIsPressed){
    strokeWeight(size);
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
  
  cursor(CROSS);
  stroke(color_picker.color())
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function clearCanvas(){
  background(255)
}

function saveToFile(){
  saveCanvas('my_Art', 'png')
}