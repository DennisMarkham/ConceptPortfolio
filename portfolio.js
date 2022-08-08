
//*******UNIVERSAL*********
function showStuff() {
    $(".content").fadeIn("slow");
}

function holidayCheck()
{
if (localStorage.getItem("holiday") == "easter")
{
  $("link[href='style.css']").attr('href','easter.css');
}
else
{
  $("link[href='easter.css']").attr('href','style.css')
}
}

function setHoliday()
{
  console.log(event.target.value);

  localStorage.setItem("holiday", event.target.value);

  holidayCheck();
}

function bunnyHop()
{
  var elem = document.getElementById("bunny");
//   //I am isolating the two components of the animation.  This is how the bunny moves left:
//   //****
   
  // var horPos = 0;
  // var windowWidth = 0;
  // //will use this later ^
  // var id = setInterval(moveLeft, 10);
  // function moveLeft() {
  //   if (horPos == 1000) {
  //     clearInterval(id);
  //   } else {
  //     horPos++; 
  //     elem.style.left = horPos + 'px'; 
  //   }
  // }
// //****

//START FROM SCRATCH:
//BUNNY MUST MOVE UP, THEN MOVE DOWN
function verticalMotion()
{
var id2 = setInterval(moveUp, 3);
var upPos = 0;
function moveUp()
{
  if (upPos == 100)
  {
    clearInterval(id2);
    var id3 = setInterval(moveDown, 2);
  }
  else
  {
    upPos++;
    elem.style.bottom = upPos + 'px';
  }
}

var downPos = 100;

function moveDown()
{
  if (downPos != 0)
  {
    downPos--;
  elem.style.bottom = downPos + 'px';
  }
  
}
}

var id4 = setInterval(verticalMotion, 5000);
// verticalMotion();

// var upPos = 0;

// var goingUp = true;

// var id2 = setInterval(moveUp, 10);
//   function moveUp() {
//     if (upPos == 100 && goingUp == true) {
//       // clearInterval(id2);
//       goingUp = false;
//       moveDown();      
//     } else {
//       upPos++; 
//       elem.style.bottom = upPos + 'px'; 
//     }
//   }


  


//   function moveDown() {
//     if (upPos == 0) {
//       // clearInterval(id3);
//       moveUp();
//     } else {
//       upPos--; 
//       elem.style.bottom = upPos + 'px'; 
//     }
  // }


}
//*********
//*****HOME STUFF******

  var images = ["images/me1.png", "images/me2.png", "images/me3.png"];

var showImage;

var count = 0;

 function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#me").attr("src", "images/me" + count + ".jpg");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  //setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}


   var config = {
    apiKey: "AIzaSyAOmfkq_B5LQevl3vi1f0neviWimLBcuek",
    authDomain: "portfolio-hit-counter-30647.firebaseapp.com",
    databaseURL: "https://portfolio-hit-counter-30647.firebaseio.com",
    projectId: "portfolio-hit-counter-30647",
    storageBucket: "portfolio-hit-counter-30647.appspot.com",
    messagingSenderId: "763848734644"
  };
  firebase.initializeApp(config);


 
    var database = firebase.database();




    database.ref().on("value", function(snapshot) {
  console.log("Logging snapshot.val " + snapshot.val());
  console.log("Logging hits " + snapshot.val().hits);

  var hitCounter = snapshot.val().hits;
  console.log("hitCounter is " + hitCounter);


  addHits();

}, function(errorObject) {

  console.log("The read failed: " + errorObject.code);
});



  function addHits()
{
      hitCounter++;
      console.log("hitCounter in showstuff() function is = " + hitCounter);
      //this console log above doesn't even fire.  WTF!?
      //Ask on stack overflow some other time

      database.ref().set({
        hits: hitCounter
      });
}


console.log("age test:" + moment("20111031", "YYYYMMDD").fromNow());

$("#age").text("lklj");

var hours = parseFloat(moment().startOf('day').fromNow());
// var hours = moment('HH');
console.log(hours);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

if (hours >= 17 || hours < 5 || hours == NaN)
{
 $("#time").text("evening");
}
else if (hours < 12)
{
  $("#time").text("morning");
}
else
{
  $("#time").text("afternoon");
}
//*****************
//****PORTFOLIO STUFF****

// //on click of .thumbnail a local storage variable with the name of this.id is set to true
// //first need to set the variables in local storage and make them false...right?


// $(".thumbnail").click(function()
// {

//   console.log("function firing: setting " + this.id + " to true");

//   localStorage.setItem(this.id, "visited");
// //set visited to true
// })
// //QUESTIONS:
// //-Train sound and magic sound
// var trainSound = new Audio("train.wav");
//   trainSound.volume = 0.1;
//   var crystalSound = new Audio("crystal.wav");
//   crystalSound.volume = 0.25;
//    var shutterSound = new Audio("shutter.wav");
//    shutterSound.volume = 0.2;
//   var thunderSound = new Audio("thunder.wav");
//   thunderSound.volume = 0.15;
//   var boomSound = new Audio("boom.mp3");
//   boomSound.volume = 0.15;
//   var typingSound = new Audio("typing.wav");
//   typingSound.volume = 0.15;
//   var wipingSound = new Audio("wiping.wav");
//   wipingSound.volume = 0.5;
//   var beepSound = new Audio("beep.wav");
//   beepSound.volume = 0.2;
  
//   function showStuff() {
//     $(".content").fadeIn("slow");

//     //visit tracker:

//     var visitedArray = [];
//     var keysArray =[];

  

// //okay, okay, the visitedArray is only passed "visited" or "null"
// //so I think what we need is parrelel array of keys.  
// //alright, let's start simple, we can dry this up later.  AND I THINK
// //TO DO THAT WE WILL HAVE TO USE THE KEYS ARRAY TO BUILD THE VISITED ARRAY!
// //YES!

// keysArray.push("crystalCollector");
// keysArray.push("trainTimer");
// keysArray.push("bombDefuser");
// keysArray.push("weatherMonitor");
// keysArray.push("reactGallery");
// keysArray.push("roulette");
// keysArray.push("whiteboard");
// keysArray.push("chatroom");
// keysArray.push("profanity");

// for (i = 0; i < keysArray.length; i++)
// {
// visitedArray.push(localStorage.getItem(keysArray[i]));
// }

// //create a for loop to loop through array, maybe it logs caption text into the 
// //console?
// for (i = 0; i < visitedArray.length; i++) { 
//    if (visitedArray[i] == "visited")
//      {
//        console.log(keysArray[i] + " visited");
//        $("#" + keysArray[i]).css("opacity", "0.5");
//     }

// }
//  //okay, the above just logs visited, not the same of the variable in local storage   
//  //EFF YEAH!  YOU DID IT!!
// }


//  function train(){
//   trainSound.play();
//   console.log("Playing train");
//  }
//  function crystal(){
//   crystalSound.play();
//   console.log("Playing crystal");
//  }
//  function shutter(){
//  shutterSound.play();
//  console.log("Playing shutter");
//  }
//  function thunder(){
//   thunderSound.play();
//   console.log("Playing thunder");
//  }
//  function boom(){
//   boomSound.play();
//   console.log("Playing boom");
//  }
// function typing(){
//   typingSound.play();
//   console.log("playing typing");
// }
// function wiping(){
//   wipingSound.play();
//   console.log("playing wiping");
// }
// function beep(){
//   beepSound.play();
//   console.log("playing beep");
// }
// //*********************
