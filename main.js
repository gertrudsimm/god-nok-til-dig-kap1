//INTRO

window.onload = function() {
  if (window.pageYOffset === 0){
  $('body').addClass('no-scroll');
} else {
    $("body").removeClass("no-scroll");
}
};


function scrollStart() {
  $("body").addClass("scroll");
};

setTimeout(scrollStart, 8560);

/*LOADING

$('#titels').each(function(){
    if ($("#titels").is(":in-viewport")) {
        $("#titels")[0].play();
    } else {
        $('#titels')[0].pause();
    }
})

$(function() {
    $('img').lazy();
});

*/
//SOUND


//CROW AT SECTION 1
function pauseAudio() {
  //pause playing
  $("#crow").trigger('pause');
  //set play time to 0
  $("#crow").prop("currentTime",0);
}

setTimeout(pauseAudio, 5560);

//TYPING AT SECTION 2

window.addEventListener("scroll",function(){
  let boxOne = document.getElementById('box-1');
  let wrapOne = document.getElementById('pt-1');
  let x = wrapOne.offsetHeight;
  let y = wrapOne.offsetTop;
  let z =  x + y;

  if((window.pageYOffset > z) && (window.pageYOffset < z + 70)){
   $("#type").trigger('play');
  }
},false);



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

  if((window.pageYOffset > (z)) && (window.pageYOffset < c) ){
   $("#drops").trigger('play');
  }
  else {
    $("#drops").trigger('pause');
    //set play time to 0
    $("#drops").prop("currentTime",0);
  }

},false);

//CROW, SECTION 3

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

  if((window.pageYOffset > (z + 1200)) && (window.pageYOffset < c) ){
   $("#crow").trigger('play');
  }
  else {
    $("#crow").trigger('pause');
    //set play time to 0
    $("#crow").prop("currentTime",0);
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
  }
}

function testScroll(ev){

  var wrapOne = document.getElementById('pt-1');
  var x = wrapOne.offsetHeight;
  var y = wrapOne.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > z)typeWriter();

}

window.onscroll=testScroll

//FADE-IN-TEXT, SECTION 3

window.addEventListener("scroll",function(){
  var boxOne = document.getElementById('box-1');
  var wrapOne = document.getElementById('pt-1');
  var x = wrapOne.offsetHeight;
  var y = wrapOne.offsetTop;
  var z =  x + y;

  if(window.pageYOffset > (y + x)){
   boxOne.classList.add('show');
   //console.log('VIRKER')
  }
  else {
    boxOne.classList.remove('show');
  }

},false);