const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })

        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'serien', '#serien');
        window.addEventListener('popstate', app.poppin);

        // Setzen der Bildnummer, auslesen aller zu ändender Elemente,
        //  und Zuweisung eines Eventlisteners,
        // der die Funktion ausführt zur Änderung des Layouts.

        let serienButton = document.getElementById("serienkopf");
        let allesumschliessend = document.getElementById("alles");
        let ueberschriftSerie= document.getElementById("ueberschriftSerie");
        let ueberschriftMusik= document.getElementById("musikUeberschrift");
        let bildnummer = "1";

        document.getElementById("aendernButton").addEventListener("click", () =>{

        // Überprüfung welches Thema aktuell ausgewählt ist
        // Ändern des Hintergrund zum nächsten Thema
        console.log(bildnummer);
        if(bildnummer == "1") {

          serienButton.style.backgroundImage="url(./serien/serienTop2.png)";
          allesumschliessend.style.backgroundImage = "url(./serien/background2.png)";
          ueberschriftSerie.style.color = "white";
          ueberschriftMusik.style.color = "black";
          bildnummer=2;
          }
        else if (bildnummer== "2"){

          serienButton.style.backgroundImage="url(./serien/serienTop3.png)";
          allesumschliessend.style.backgroundImage = "url(./serien/background3.png)";
          bildnummer=3;
          }
        else if (bildnummer== "3"){

          serienButton.style.backgroundImage="url(./serien/serienTop4.png)";
          allesumschliessend.style.backgroundImage = "url(./serien/background4.png)";
          bildnummer=4;
          }
        else if (bildnummer== "4"){

          serienButton.style.backgroundImage="url(./serien/serienTop5.png)";
          allesumschliessend.style.backgroundImage = "url(./serien/background5.png)";
          bildnummer=5;
          }
        else if (bildnummer== "5"){

          serienButton.style.backgroundImage="url(./serien/serienTop.png)";
          allesumschliessend.style.backgroundImage = "url(./serien/background.png)";
          ueberschriftSerie.style.color = "black";
          ueberschriftMusik.style.color = "white";
          bildnummer=1;
          }
        })
;
    },
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

document.addEventListener('DOMContentLoaded', app.init);
