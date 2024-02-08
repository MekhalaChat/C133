
img = "";
object = [];
status = "";

function preload(){
img = loadImage('windows10loveswindows7.jpg');
}


function setup() {
canvas = createCanvas(640, 480);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
console.log("modelLoaded");
status = true;
objectDetector.detect(img, gotResults);
}
function gotResults(error,  results) {
if (error) {
console.log(error);
}
console.log(results);
objects = results;
}
function draw() {
image(img, 0, 0, 640, 480 );
if(status != "")
{
for (i = 0; i < objects.length; i++) {
document.getElementById("status").innerHTML = "status : Object Detected";
fill("#FF0000");
percent = floor(objects[i].confidence * 100);
Text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);
nofill();
stroke("#FF0000");
rect(objects[i].x, objects[i].y, object[i].width, object[i].height);
  }
}
}
