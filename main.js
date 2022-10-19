//https://teachablemachine.withgoogle.com/models/ncTfpaWFo/

Webcam.set({
    width:350,
    height:300,
    img_format : "png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_url + "'>"
    });
}

console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ncTfpaWFo/model.json");

function modelLoaded() {
    console.log("model loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction is " + prediction_1 + ", ";
    speak_data_2 = "and the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}