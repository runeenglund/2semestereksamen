console.log("this is working");

//afdeling dropdown start
function afdelingFunction() {
  let afdelingArray = new Array("København", "Aarhus", "Odense", "Malmø");

  let dropdown = document.getElementById("afdeling");

  for (let i = 0; i < afdelingArray.length; ++i) {
    dropdown[dropdown.length] = new Option(afdelingArray[i], afdelingArray[i]);
  }
}
  afdelingFunction();
//afdeling dropdown slut

//God dag text start

function hilsenFunction(){
  let time = new Date().getHours();
  let hilsen;

  if (time < 18) {
    hilsen = "Tak for at henvende dig til os, hav en fantastisk dag!";
  } else {
    hilsen = "Tak for at henvende dig til os, hav en fantastisk aften";
  }

  document.getElementById("hilsen").innerHTML = hilsen;
}

hilsenFunction();

//God dag text slut
