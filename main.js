status = "";

function preload(){


}

function setup(){

    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
   video.size(400,300);
}

function draw(){
 image(video, 0,0, 400, 300);
}

function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded())
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
   object_name = document.getElementById("text_box").value
}

function modelLoaded(){
    console.log("modelLoaded")
    status=true;
}