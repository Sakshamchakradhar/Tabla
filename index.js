
document.querySelector(".t").addEventListener("click",function (){
	var audio=new Audio("song/t.mp3");
	audio.play();
})
document.querySelector(".d").addEventListener("click",function (){
	var audio=new Audio("song/d.mp3");
	audio.play();
})

var audioa = new Audio("song/t.mp3");
var audiob = new Audio("song/d.mp3");

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "84") { 
    audioa.play();
 }
 if(key.keyCode == "68"){ 
    audiob.play();
 }
}