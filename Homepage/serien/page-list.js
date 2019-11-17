
/**
 * Die Klasse PageList dient der Darstellung der Listenübersicht
 * Sie wird von der App Klasse aufgerufen.
 *
 */

class PageList {
    /**
     * @param {App} app Instanz der App-Klasse
     */

    constructor(app) {
        this._app = app;
        this._mainElement = document.getElementById("serienListe");
    }

    // Seite anzeigen
    show() {
        this.erstelleListe();
        this._mainElement.classList.remove("hidden");
    }

    // Seite ausblenden
    hide() {
        this._mainElement.classList.add("hidden");
    }

    // Listeninhalte in die HTML-Seite einfügen.
    erstelleListe() {

        // Vorherige Einträge löschen
        let ol = document.querySelector("#serienListe > ol");
        ol.innerHTML = "";


        let serie = this._app.inhaltAuslesen();


        if (serie.length < 1) {
            let template = document.getElementById("template-liste-leer").innerHTML;
            ol.innerHTML = template;
            return;
        }

        // Daren einfügen
        let template = document.getElementById("template-serien-liste-li").innerHTML;
        let index = -1;



        serie.forEach(serie => {
            // Hochzählen des Index
            index++;

            let n = index.toString();

            // Mit Hilfe des Templates einen neuen Eintrag kreieren
            let temp = document.createElement("div");
            temp.innerHTML = template;

            temp.innerHTML = temp.innerHTML.replace("$TITEL$", serie.titel);
            temp.innerHTML = temp.innerHTML.replace("$JAHR$", serie.jahr);
            temp.innerHTML = temp.innerHTML.replace("$GENRE$", serie.genre);
            temp.innerHTML = temp.innerHTML.replace("$ALTER$", serie.alter);
            temp.innerHTML = temp.innerHTML.replace("$STAFFELN$", serie.staffeln);
            temp.innerHTML = temp.innerHTML.replace("$FOLGEN$", serie.folgen);
            temp.innerHTML = temp.innerHTML.replace("$LAENGE$", serie.laenge);
            temp.innerHTML = temp.innerHTML.replace("$SPRACHE$", serie.sprache);
            temp.innerHTML = temp.innerHTML.replace("$BEWERTUNG$", serie.bewertung);

            //Einfärben der Anzahl der Sterne entsprechend der Bewertung
            if(serie.bewertung == 1){
                temp.innerHTML = temp.innerHTML.replace("$STERN1$", "gesetzt");
            }
            else if (serie.bewertung==2) {
                temp.innerHTML = temp.innerHTML.replace("$STERN1$", "gesetzt");
                  temp.innerHTML = temp.innerHTML.replace("$STERN2$", "gesetzt");
            }
            else if (serie.bewertung==3) {
              temp.innerHTML = temp.innerHTML.replace("$STERN1$", "gesetzt");
                temp.innerHTML = temp.innerHTML.replace("$STERN2$", "gesetzt");
                temp.innerHTML = temp.innerHTML.replace("$STERN3$", "gesetzt");
            }
            else if (serie.bewertung==4) {
                temp.innerHTML = temp.innerHTML.replace("$STERN1$", "gesetzt");
                temp.innerHTML = temp.innerHTML.replace("$STERN2$", "gesetzt");
                temp.innerHTML = temp.innerHTML.replace("$STERN3$", "gesetzt");
                temp.innerHTML = temp.innerHTML.replace("$STERN4$", "gesetzt");
            }
            else if (serie.bewertung==5) {
              temp.innerHTML = temp.innerHTML.replace("$STERN1$", "gesetzt");
              temp.innerHTML = temp.innerHTML.replace("$STERN2$", "gesetzt");
              temp.innerHTML = temp.innerHTML.replace("$STERN3$", "gesetzt");
              temp.innerHTML = temp.innerHTML.replace("$STERN4$", "gesetzt");
              temp.innerHTML = temp.innerHTML.replace("$STERN5$", "gesetzt");
            }

            // Listeners mit über den Index festlegen
            let _addEventListeners = (index) => {

                let editButton = temp.querySelector(".action.edit");
                editButton.addEventListener("click", () => this._app.seiteAnzeigen("page-edit", index));


                let loeschenButton = temp.querySelector(".action.delete");
                loeschenButton.addEventListener("click", () => this.loeschen(index));
            };

            _addEventListeners(index);

            // Anzeigen
            let li = temp.firstElementChild;

            if (li) {
                temp.removeChild(li);
                ol.appendChild(li);
            }
        });
    }

    /**
     *
     * @param {Integer} index Index des zu löschenden Datensatzes
     */
    loeschen(index) {

        this._app.inhaltloeschenByIndex(index);

        this.erstelleListe();
    }
}
