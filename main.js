Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_taken" src="'+data_uri+'">';
    });
}

console.log("ML5 Version - ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gmjtnZgyB/model.json', ModelLoaded);
function ModelLoaded() {
    console.log("Model Loaded - True");
}
