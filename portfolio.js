
//*******UNIVERSAL*********
function showStuff() {
    $(".content").fadeIn("slow");
}
//this does not have any effect until I re-enable the "display none" on my css.  But
//this is faulty for some reason

function holidayCheck()
{
if (localStorage.getItem("holiday") == "easter")
{
  $("link[href='default.css']").attr('href','easter.css');
}
else
{
  $("link[href='easter.css']").attr('href','default.css')
}
}

//this streamlined version of holidayCheck breaks the program for some reason
// function holidayCheck()
// {
// var skin = localStorage.getItem("holiday");

// $("link[rel='stylesheet']").attr('href', skin + '.css');
// }


function setHoliday()
{
  console.log(event.target.value);

  localStorage.setItem("holiday", event.target.value);

  holidayCheck();
}

function bunnyHop()
{
  var elem = document.getElementById("bunny");

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


}

  
