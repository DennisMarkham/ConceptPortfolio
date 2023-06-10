
//*******UNIVERSAL*********
function showStuff() {
    $(".content").fadeIn("slow");
}

function skinCheck() {
    var skin = localStorage.getItem("skin");
    if (skin == null) {
        skin = "default";
    }
    $(".subStyle").attr('href', "style/" + skin + '.css');
    $('select option[value="' + skin + '"]').attr("selected", true);
}


function setSkin() {
    console.log(event.target.value);

    localStorage.setItem("skin", event.target.value);

    skinCheck();
}

// function bunnyHop()
// {
//   var elem = document.getElementById("bunny");

// function verticalMotion()
// {
// var id2 = setInterval(moveUp, 3);
// var upPos = 0;
// function moveUp()
// {
//   if (upPos == 100)
//   {
//     clearInterval(id2);
//     var id3 = setInterval(moveDown, 2);
//   }
//   else
//   {
//     upPos++;
//     elem.style.bottom = upPos + 'px';
//   }
// }

// var downPos = 100;

// function moveDown()
// {
//   if (downPos != 0)
//   {
//     downPos--;
//   elem.style.bottom = downPos + 'px';
//   }
  
// }
// }

// var id4 = setInterval(verticalMotion, 5000);


// }

  
