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

function check() {
    img = document.getElementById("image_taken");
    classifier.classify(img , gotResult);

    function gotResult(error, result) {
        if (error) {
            console.error(error);
            window.alert("Error in identifing image");
        }
        else {
            console.log(result);
            document.getElementById("result_object").innerHTML = result[0].label;
            document.getElementById("result_acuracy").innerHTML = result[0].confidence.toFixed(2);
        }
    }
}