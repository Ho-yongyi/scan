Webcam.attach("#video");
video = document.getElementById("video");
Webcam.set(
    {
        width: 350,
        height: 300,
        image_format: "png",
        png_quality: 90
    }
);
function video(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML="<img id='img' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h1QzY7XQ1/model.json",model_loaded);
function model_loaded()
{
    console.log("model is loaded");
}
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("picture").innerHTML = '<img id="catptured_image" src="'+data_uri+'"/>';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h1QzY7XQ1/model.json',modelLoaded);
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, result)
{
    if (error) 
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].lael;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}