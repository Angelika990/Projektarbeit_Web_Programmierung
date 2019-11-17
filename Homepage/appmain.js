function changePage(targetId) {
  let pages = document.querySelectorAll('.page');
  pages.forEach(el => {
    if (el.id == targetId) {
      el.classList.add('active')
    }
    else {
      el.classList.remove('active');
    }
  })

  history.pushState({}, targetId, `#${targetId}`);
}
// Funktion um den Plusbutton beim Scrollen festzusetzen.
// Damit bei vielen Einträgen nicht ewig
// nach oben gescrollt werden muss, bei gewünschten Neueintrag

window.onscroll = function() {
  let serienseite = document.getElementById("serien");
  let musikseite = document.getElementById("musik");
  let plus = document.getElementById("1");
  let plus2 = document.getElementById("4");
  let fest = plus.offsetTop;
  let stay = plus2.offsetTop;
  console.log(plus2);
  console.log(plus);

  if (window.pageYOffset >fest) {

    if(serienseite.getAttribute("class") == "page active"){
      plus.setAttribute("titel", "fest")
    }
    if(musikseite.getAttribute("class") == "page active"){
        plus2.setAttribute("titel", "fest");
    }
 }
 else {

    plus2.removeAttribute("titel")
    plus.removeAttribute("titel");
  }
};

let bildnummer = 1;
function changeBackground() {
  // Setzen der Bildnummer, auslesen aller zu ändender Elemente,
  //  und Zuweisung eines Eventlisteners,
  // der die Funktion ausführt zur Änderung des Layouts.

  let serienKopf = document.getElementById("serienkopf");
  let allesumschliessend = document.getElementById("alles");
  let ueberschriftSerie= document.getElementById("ueberschriftSerie");
  let ueberschriftMusik= document.getElementById("musikUeberschrift");
  // Überprüfung welches Thema aktuell ausgewählt ist
  // Ändern des Hintergrund zum nächsten Thema
  if(bildnummer == "1") {
    serienKopf.style.backgroundImage="url(./serien/serienTop2.png)";
    allesumschliessend.style.backgroundImage = "url(./serien/background2.png)";
    ueberschriftSerie.style.color = "white";
    ueberschriftMusik.style.color = "black";
    bildnummer=2;
  }
  else if (bildnummer== "2"){

    serienKopf.style.backgroundImage="url(./serien/serienTop3.png)";
    allesumschliessend.style.backgroundImage = "url(./serien/background3.png)";
    bildnummer=3;
  }
  else if (bildnummer== "3"){

    serienKopf.style.backgroundImage="url(./serien/serienTop4.png)";
    allesumschliessend.style.backgroundImage = "url(./serien/background4.png)";
    bildnummer=4;
  }
  else if (bildnummer== "4"){

    serienKopf.style.backgroundImage="url(./serien/serienTop5.png)";
    allesumschliessend.style.backgroundImage = "url(./serien/background5.png)";
    bildnummer=5;
  }
  else if (bildnummer== "5"){

    serienKopf.style.backgroundImage="url(./serien/serienTop.png)";
    allesumschliessend.style.backgroundImage = "url(./serien/background.png)";
    ueberschriftSerie.style.color = "black";
    ueberschriftMusik.style.color = "white";
    bildnummer=1;
  }
}

window.addEventListener('load', function() {
  history.replaceState({}, 'serien', '#serien');
})

const app = {
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        console.log(currentPage);
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage);
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);

    },

    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }

}

// document.addEventListener('DOMContentLoaded', app.init);
