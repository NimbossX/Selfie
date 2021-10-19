var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition 
var textbox=document.getElementById("textbox")
function start(){
    textbox.innerHTML=" "
    Recognition.start()
    
}
Recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    textbox.innerHTML=content
    console.log(content)
    if (content=="take my selfie") {
      console.log("taking selfie in 5 seconds")  
      speak()
    }  
}
function speak(){
  var synth=window.speechSynthesis 
  speakdata=document.getElementById("textbox").value;
  var utterthis=new SpeechSynthesisUtterance(speakdata)
  synth.speak(utterthis)
  Webcam.attach(camera)
  takeselfie()
  save()
}
camera=document.getElementById("camera")
Webcam.set({
  width : 360, height : 250, image_format : 'jpeg',jpeg_quality : 90
})


function takeselfie(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>'
  })
}
function save(){
  link=document.getElementById("link");
  image=document.getElementById("selfie_image").src;
  link.href=image;
  link.click()  
}