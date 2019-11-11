"use strict";

class App {
    /**
     * @param {Liste} pages Seiten, zwischen denen umgeschaltet werden kann
     */
    constructor(pages) {

        this._pages = pages;
        this.aktuelleSeite = null;


        this.inhalt = [
            {
                titel: "The Originals",
                jahr: "2013-2018",
                genre: "Fantasy, Mystery, Drama",
                alter: "16",
                staffeln: "5",
                folgen: "92",
                laenge: "ca. 40",
                sprache: "Deutsch, Englisch",
                bewertung:"5",

            },
        ];
        this.bildnummer = "1";
        let serienButton = document.getElementById("serienkopf");
        serienButton.addEventListener("click", () => this.themawechseln());

        this.menueErstellen();

        window.onscroll = function() {
          let plus = document.getElementById("1");
          let fest = plus.offsetTop;

          if (window.pageYOffset >= fest) {
            plus.setAttribute("name", "fest");
         } else {
            plus.removeAttribute("name");
          }
        };

    }


    menueErstellen() {
        let ul = document.querySelector("#serien-menu > ul");
        let template = document.getElementById("menueleiste").innerHTML;
        let idZahl = 1;

        this._pages.forEach(page => {

            if (page.hidden) return;


            let temp = document.createElement("ul");
            temp.innerHTML = template;
            temp.innerHTML = temp.innerHTML.replace("$NAME$", page.name);
            temp.innerHTML = temp.innerHTML.replace("$LABEL$", page.label);


            let li = temp.firstElementChild;
            li.addEventListener("click", () => this.seiteAnzeigen(page.name));
            li.setAttribute("id", idZahl)


            temp.removeChild(li);
            ul.appendChild(li);
            idZahl++;
        });
    }

    /**
     *
     * @param  {String} name Name der anzuzeigenden Seite, gemäß this.pages
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes (optional)
     */
    seiteAnzeigen(name, editIndex) {

        let neueSeite = this._pages.find(seite => seite.name === name);

        if (neueSeite === undefined) {
            return;
        }


        if (this.aktuelleSeite != null) {
            this.aktuelleSeite.hide();
        }

        this.aktuelleSeite = new neueSeite.klass(this, name, editIndex);
        this.aktuelleSeite.show();


        document.querySelectorAll("#serien-menu li").forEach(li => li.classList.remove("active"));
        document.querySelectorAll(`#serien-menu li[data-page-name="${name}"]`).forEach(li => li.classList.add("active"));
    }

    themawechseln(){
      let serienButton = document.getElementById("serienkopf");
      let allesumschliessend = document.getElementById("alles");
      let ueberschrift= document.getElementById("ueberschriftSerie");

      console.log(this.bildnummer);
      if(this.bildnummer == "1") {

        serienButton.style.backgroundImage="url(serienTop2.png)";
        allesumschliessend.style.backgroundImage = "url(background2.png)";
        ueberschrift.style.color = "white";
        this.bildnummer=2;
        }
      else if (this.bildnummer== "2"){

        serienButton.style.backgroundImage="url(serienTop3.png)";
        allesumschliessend.style.backgroundImage = "url(background3.png)";
        this.bildnummer=3;
        }
      else if (this.bildnummer== "3"){

        serienButton.style.backgroundImage="url(serienTop4.png)";
        allesumschliessend.style.backgroundImage = "url(background4.png)";
        this.bildnummer=4;
        }
      else if (this.bildnummer== "4"){

        serienButton.style.backgroundImage="url(serienTop5.png)";
        allesumschliessend.style.backgroundImage = "url(background5.png)";
        this.bildnummer=5;
        }
      else if (this.bildnummer== "5"){

        serienButton.style.backgroundImage="url(serienTop.png)";
        allesumschliessend.style.backgroundImage = "url(background.png)";
        ueberschrift.style.color = "black";
        this.bildnummer=1;
        }
      }

    /**
     * @param  {Integer} index Index des gewünschten Datensatzes
     * @return {Object} Gewünschter Datensatz oder undefined
     */
      inhaltAuslesenByIndex(index) {
      return this.inhalt[index];
    }

    /**
     * @return {Array} Array mit allen Datenobjekten
     */
    inhaltAuslesen() {
        return this.inhalt;
    }


    /**
     * @param {Integer} index Index des zu aktualisierenden Datensatzes
     * @param {Object} serie Neue Daten des Datensatzes
     */
    inhaltBearbeitenByIndex(index, serie) {
        this.inhalt[index] = serie;
    }

    /**
     * @param {[type]} index Index des zu löschenden Datensatzes
     */
    inhaltloeschenByIndex(index) {
        this.inhalt.splice(index, 1);
    }

    /**
     * @param  {Object} serie Neu anzuhängender Datensatz
     * @return {Integer} Index des neuen Datensatzes
     */
    inhaltHinzufuegen(serie) {
        this.inhalt.push(serie);
        return this.inhalt.length - 1;
    }

    headerFest(){
      console.log="geschafft";
    }
}
