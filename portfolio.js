
//*******UNIVERSAL*********
function showStuff() {
    $(".content").fadeIn("slow");
}
//does this actually work? I don't think so.

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

  
