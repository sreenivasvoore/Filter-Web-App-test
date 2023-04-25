var img = "";

function preload() {
    img = loadImg("https://i.postimg.cc/xjtXQQw5/mustache.png");
    img = loadImg("https://i.postimg.cc/1z39JVtZ/lipstick.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, nose_x - 15, nose_y - 15, 30, 30)
}

function takeSnapshot() {
    save("Mustache/Lipstick_face.png");
}


function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}