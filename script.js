



var myVar;




function myFunction() {
  myVar = setTimeout(showPage, 500);
  const kepek = ["./backg/1.jpg","./backg/2.png","./backg/3.jpg","./backg/4.jpg","./backg/5.jpg","./backg/6.jpg",
"./backg/7.jpg","./backg/8.jpg","./backg/9.png","./backg/10.jpg","./backg/11.jpg","./backg/12.jpg","./backg/13.jpg","./backg/14.jpg","./backg/15.png","./backg/16.jpg",
"./backg/17.jpg","./backg/18.jpg","./backg/19.jpg","./backg/20.png","./backg/21.jpg","./backg/22.jpg","./backg/23.jpg","./backg/24.jpg","./backg/25.png","./backg/26.jpg","./backg/27.png",
"./backg/28.png","./backg/29.jpg","./backg/30.png","./backg/31.jpg","./backg/32.png","./backg/33.jpg","./backg/34.jpg","./backg/35.jpg"];

// Véletlenszerűen válasszuk ki egy képet
const kepIndex = Math.floor(Math.random() * kepek.length);
const kep = kepek[kepIndex];

// Állítsuk be a header háttereként a kiválasztott képet
const header = document.querySelector("header");
header.style.backgroundImage = `url(${kep})`;

}

function showPage() {
  var betolto = document.getElementById("betolto");
  var egesz =   document.getElementById("egesz");
  betolto.classList.add("hide");
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

function belepes(){

      var cuccok = 0;
    if (document.getElementById("felhasznalob").value != ""){
        cuccok++;
    }
    if (document.getElementById("jelszob").value != ""){
        cuccok++;
    }

    if (cuccok < 2){
        document.getElementById("felhasznalob").placeholder = "Nincs felhasználónév";
        document.getElementById("felhasznalob").setAttribute("class","placeholder");
        document.getElementById("jelszob").placeholder = "Nincs jelszó";
        document.getElementById("jelszob").setAttribute("class","placeholder");
    }
    if (cuccok > 1){
        document.getElementById("hibauzi").innerHTML = "Érvénytelen jelszó vagy felhasználó";
     
    }
}
function regisztracio(){
    var felhsz = false;
    var jelszom = false;
    var emaill = false;
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value != "" & !filter.test(email.value))  {
        document.getElementById("hibauzi").innerHTML = "Az E-mail nem helyes!<br>";
        document.getElementById("sikeres").innerHTML = "";
    } else{
        emaill = true;
    }
  if (document.getElementById("email").value.length == 0){
     document.getElementById("email").placeholder = "Nincs megadva E-mail!";
        document.getElementById("email").setAttribute("class","placeholder");
  }
  if (document.getElementById("jelszo").value.length == 0){
          document.getElementById("jelszo").placeholder = "Nem adtál meg jelszót!";
        document.getElementById("jelszo").setAttribute("class","placeholder");
  }
  if (document.getElementById("jelszoujra").value.length == 0){
    document.getElementById("jelszoujra").placeholder = "Nem adtál meg jelszót!";
  document.getElementById("jelszoujra").setAttribute("class","placeholder");
}
if (document.getElementById("jelszoujra").value != document.getElementById("jelszo").value && document.getElementById("jelszoujra").value.length != 0){
    document.getElementById("hibauzi").innerHTML = "A jelszavak nem egyeznek!<br>";
    document.getElementById("sikeres").innerHTML = "";
} else{
    jelszom = true;
} 
  if (document.getElementById("jelszo").value.length < 6 && document.getElementById("jelszo").value.length != 0){
    document.getElementById("hibauzi").innerHTML = "A jelszónak minimum 6 karakterből kell állnia!<br>";
    document.getElementById("sikeres").innerHTML = "";
} 
    if (jelszomegv = 0){
        document.getElementById("jelszoujra").placeholder = "Nincs megadva jelszó!";
        document.getElementById("jelszoujra").setAttribute("class","placeholder");
  }
  if (document.getElementById("felhasznalo").value.length == 0){
        document.getElementById("felhasznalo").placeholder = "Nincs felhasználó!";
        document.getElementById("felhasznalo").setAttribute("class","placeholder");
  } 
  if (document.getElementById("felhasznalo").value.length < 3 && document.getElementById("felhasznalo").value.length != 0){
    document.getElementById("hibauzi").innerHTML = "A felhasználónévnek minimum 3 karakterből kell állnia!<br>";
  } else if(document.getElementById("felhasznalo").value.length > 3){
        felhsz = true;
  }
  
  if (felhsz == false && jelszom == false && emaill == false){
    document.getElementById("hibauzi").innerHTML = "Hibás adatok";
    document.getElementById("sikeres").innerHTML = "";
} else if(document.getElementById("jelszo").value.length == 0 && document.getElementById("jelszoujra").value.length == 0){
    document.getElementById("hibauzi").innerHTML = "Hibás adatok";
}

    
    if (felhsz == true && jelszom == true & emaill == true){
        document.getElementById("sikeres").innerHTML = "Sikeres regisztráció!";
        alert("Nincs kész mivel nem volt idő.")
        document.getElementById("hibauzi").innerHTML = "";
     
    }  
    
}



document.addEventListener('contextmenu', event => event.preventDefault());
