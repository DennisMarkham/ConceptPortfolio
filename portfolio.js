
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

  
