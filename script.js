var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
  const kepek = ["./backg/1.jpg","./backg/2.png","./backg/3.jpg","./backg/4.jpg","./backg/5.jpg","./backg/6.jpg",
"./backg/7.jpg","./backg/8.jpg","./backg/9.png",];

// Véletlenszerűen válasszuk ki egy képet
const kepIndex = Math.floor(Math.random() * kepek.length);
const kep = kepek[kepIndex];

// Állítsuk be a header háttereként a kiválasztott képet
const header = document.querySelector("header");
header.style.backgroundImage = `url(${kep})`;
}

function showPage() {
  var loader = document.getElementById("loader");
  var egesz =   document.getElementById("egesz");
  loader.classList.add("hide");
  egesz.classList.add("aktiv");
document.body.style.overflow = "visible";
}

history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}