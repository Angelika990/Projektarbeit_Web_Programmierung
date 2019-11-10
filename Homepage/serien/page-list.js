

class PageList {
    /**
     * @param {App} app Instanz der App-Klasse
     */

    constructor(app) {
        this._app = app;
        this._mainElement = document.getElementById("serienListe");
    }


    show() {
        this.erstelleListe();
        this._mainElement.classList.remove("hidden");
    }


    hide() {
        this._mainElement.classList.add("hidden");
    }

    erstelleListe() {

        let ol = document.querySelector("#serienListe > ol");
        ol.innerHTML = "";


        let serie = this._app.inhaltAuslesen();


        if (serie.length < 1) {
            let template = document.getElementById("template-liste-leer").innerHTML;
            ol.innerHTML = template;
            return;
        }


        let template = document.getElementById("template-serien-liste-li").innerHTML;
        let index = -1;



        serie.forEach(serie => {

            index++;

            let n = index.toString();

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

            if(serie.bewertung == 1){
                temp.innerHTML = temp.innerHTML.replace("$STERN1$", "checked");
            }
            else if (serie.bewertung==2) {
                temp.innerHTML = temp.innerHTML.replace("$STERN1$", "checked");
                  temp.innerHTML = temp.innerHTML.replace("$STERN2$", "checked");
            }
            else if (serie.bewertung==3) {
              temp.innerHTML = temp.innerHTML.replace("$STERN1$", "checked");
                temp.innerHTML = temp.innerHTML.replace("$STERN2$", "checked");
                temp.innerHTML = temp.innerHTML.replace("$STERN3$", "checked");
            }
            else if (serie.bewertung==4) {
                temp.innerHTML = temp.innerHTML.replace("$STERN1$", "checked");
                temp.innerHTML = temp.innerHTML.replace("$STERN2$", "checked");
                temp.innerHTML = temp.innerHTML.replace("$STERN3$", "checked");
                temp.innerHTML = temp.innerHTML.replace("$STERN4$", "checked");
            }
            else if (serie.bewertung==5) {
              temp.innerHTML = temp.innerHTML.replace("$STERN1$", "checked");
              temp.innerHTML = temp.innerHTML.replace("$STERN2$", "checked");
              temp.innerHTML = temp.innerHTML.replace("$STERN3$", "checked");
              temp.innerHTML = temp.innerHTML.replace("$STERN4$", "checked");
              temp.innerHTML = temp.innerHTML.replace("$STERN5$", "checked");
            }


            let _addEventListeners = (index) => {

                let editButton = temp.querySelector(".action.edit");
                editButton.addEventListener("click", () => this._app.seiteAnzeigen("page-edit", index));


                let loeschenButton = temp.querySelector(".action.delete");
                loeschenButton.addEventListener("click", () => this.loeschen(index));
            };

            _addEventListeners(index);


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
