object=[];
img="";
status="";
function preload() {
img=loadImage("dog_cat.jpg");
}

function setup() {
canvas=createCanvas(600, 400);
canvas.center();
Cocossd=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="Status: detecting objects";
}

function modelLoaded() {
    console.log("model loaded!");
    status=true;
    Cocossd.detect(img, gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
    }
    console.log(results);
    object=results;
    
    }
function draw() {
image(img, 0, 0, 600, 400);

//stroke("red");
//fill('blue');
//text('Dog', 50, 30);
//text('Cat', 300, 30);
//text('Bowl', 290, 330);
//noFill();
//rect(40,10, 250, 380);
//rect(290, 10, 250, 380);
//rect(269, 310, 120, 80);


if (status != "") {

for (i=0; i<object.length; i++) {
    document.getElementById("status").innerHTML="Object Detected!";
   fill("blue");
   confidence=object[i].confidence;
   percent=floor(confidence*100);
   noStroke();
    textSize(31.41592653589793238462643383);
    text(object[i].label+" "+percent+"%", object[i].x, object[i].y );
    strokeWeight(3.141592653589793238462643383);
    stroke("blue");
    noFill();
    rect(object[i].x, object[i].y-30, object[i].width, object[i].height);
}
}

}