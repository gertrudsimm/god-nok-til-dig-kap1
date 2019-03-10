

//INTRO

//AUDIO BUTTON



window.addEventListener("scroll",function(){
  if(window.pageYOffset > 0){
   $("#button").css("opacity", "0.5");
  }

},false);




//DISABLE SCROLL


window.onload = function() {
  if (window.pageYOffset === 0){
  $('body').addClass('no-scroll');
	    setTimeout(prod1Show, 000);
setTimeout(prod1Fade, 3000);
setTimeout(prod2Show, 5000);
setTimeout(authShow, 6000);
setTimeout(authFade, 8000);
setTimeout(chapShow, 10000);
setTimeout(scrll, 12000);
	  $("#prompt").css("display", "block");

} else {
	$( "#loader" ).remove();
    $("body").removeClass("no-scroll");
	$("body").addClass("scroll");
	$("#prod-2").css("opacity", "1");
	$("#chap").css("opacity", "1");
	$("#prompt").css("display", "none");
}
};



//INTRO-"VIDEO"

function prod1Show() {
	$("#prod-1").addClass("show fad");
	$( "#loader" ).remove();
}

function prod1Fade() {
	$("#prod-1").removeClass("show");
}

function prod2Show() {
	$("#prod-2").addClass("show fad");
}

function authShow() {
	$("#auth").addClass("show fad");
	
}

function authFade() {
	$("#auth").removeClass("show");
	$("#prompt").css("opacity", "0");
}

function chapShow() {
	$("#chap").addClass("show fad");
	
}

function scrll() {
	$("body").addClass("scroll");
	
}

//CALL FUNCTIONS



//LOADING




//SOUND

//START SOUNDS



function toggle(el){
    if(el.className!="pause")
    {
        el.src='img/mute.png';
        el.className="pause";
		$("#bg-sound").trigger('play');
		$("#crow").trigger('play');
		$("audio").prop('muted', false);
		$("#prompt").css("display", "none");

    }
    else if(el.className=="pause")
    {
        el.src='img/unmute.png';
        el.className="play";
		$("#bg-sound").trigger('pause');
		$("#crow").trigger('pause');
		$("audio").prop('muted', true);
    }

    return false;
}




//CROW AT SECTION 1


function pauseAudio() {
  //pause playing
  $("#crow").trigger('pause');
  //set play time to 0
  $("#crow").prop("currentTime",0);
}






//WATERDROPS AT SECTION 3
window.addEventListener("scroll",function(){
  let boxOne = document.getElementById('box-1');
  let wrapOne = document.getElementById('pt-1');
  let x = wrapOne.offsetHeight;
  let y = wrapOne.offsetTop;
  let z =  x + y;
  let wrapTwo = document.getElementById('pt-3');
  let a = wrapTwo.offsetHeight;
  let b = wrapTwo.offsetTop;
  let c =  a + b;

  if((window.pageYOffset > (z + 500)) && (window.pageYOffset < c) ){
   $("#drops").trigger('play');
  }
  else {
    $("#drops").trigger('pause');
    //set play time to 0
    $("#drops").prop("currentTime",0);
  }

},false);



//TRANSITIONS

//TYPE LOCATION, SECTION 2

var i = 0;
var txt = 'BLÅHOLMSKOV, sidste dag af sommerferien';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("setting").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
	$("#type").trigger('play');
  }
}

function testScroll(ev){

  var wrapOne = document.getElementById('pt-1');
  var x = wrapOne.offsetHeight;
  var y = wrapOne.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > z)
	  typeWriter();
		pauseAudio();
	

}

window.onscroll=testScroll

//FADE-IN-TEXT, SECTION 3

window.addEventListener("scroll",function(){
  var boxOne = document.getElementById('box-1');
  var wrapOne = document.getElementById('pt-1');
  var x = wrapOne.offsetHeight;
  var y = wrapOne.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > (y + x + 500)){
   boxOne.classList.add('show');
   //console.log('VIRKER')
  }
  else {
    boxOne.classList.remove('show');
  }

},false);
