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


        this.menueErstellen();
    }


    menueErstellen() {
        let ul = document.querySelector("#serien-menu > ul");
        let template = document.getElementById("menueleiste").innerHTML;

        this._pages.forEach(page => {

            if (page.hidden) return;


            let temp = document.createElement("ul");
            temp.innerHTML = template;
            temp.innerHTML = temp.innerHTML.replace("$NAME$", page.name);
            temp.innerHTML = temp.innerHTML.replace("$LABEL$", page.label);


            let li = temp.firstElementChild;
            li.addEventListener("click", () => this.seiteAnzeigen(page.name));


            temp.removeChild(li);
            ul.appendChild(li);
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


    /**
     * @return {Array} Array mit allen Datenobjekten
     */
    inhaltAuslesen() {
        return this.inhalt;
    }

    /**
     * @param  {Integer} index Index des gewünschten Datensatzes
     * @return {Object} Gewünschter Datensatz oder undefined
     */
    inhaltAuslesenByIndex(index) {
        return this.inhalt[index];
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
}
