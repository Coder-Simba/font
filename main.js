leftWristX=0;
rightWristX=0
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(700, 415);
    canvas.position(560,110);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX="+ leftWristX +"rigthWristX="+ rightWristX);
        difference=floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX + " rightWristX" + rightWristX +"difference=" + difference);

    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized')
}
function draw(){
    background('lightblue') 
    textSize(difference);
    fill("blue");
    text("Sayuri", 50, 100)

}




