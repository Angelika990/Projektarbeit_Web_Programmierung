"use strict";
/**
 * Die Klasse PageEdit stellt das Eingabeformular dar.
 * Sie wird von der App Klasse aufgerufen.
 *
 */

class PageEdit {
    /**
     *
     * @param {App} app Instanz der App-Klasse
     * @param {String} pageName Name der aufgerufenen Seite
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes
     */
    constructor(app, pageName, editIndex) {

        this._app = app;
        this._editIndex = editIndex;

        // Darstellung der Bearbeitungsseite auslesen
        this.bearbeitendeSeite = document.getElementById("serienBearbeitenSeite");

        // Bearbeiteten Datensetz einlesen
        this._serie = {

            titel: "",
            jahr: "",
            genre: "",
            alter: "",
            staffeln: "",
            folgen: "",
            laenge: "",
            sprache: "",
            bewertung: "",

        };

        if (this._editIndex > -1) {
            let serie = this._app.inhaltAuslesenByIndex(this._editIndex);

            this._serie.titel = serie.titel;
            this._serie.jahr = serie.jahr;
            this._serie.genre = serie.genre;
            this._serie.alter = serie.alter;
            this._serie.staffeln = serie.staffeln;
            this._serie.folgen = serie.folgen;
            this._serie.laenge = serie.laenge;
            this._serie.sprache = serie.sprache;
            this._serie.bewertung = serie.bewertung;


        }
    }

    // Seite anzeigen
    show() {
        this.neuerEintrag();
        this.bearbeitendeSeite.classList.remove("hidden");
    }

    // Seite ausblenden
    hide() {
        this.bearbeitendeSeite.classList.add("hidden");
    }
    // Neu geänderter Eintrag einfügen
    neuerEintrag() {
        //Voherige Inhalte löschen
        this.bearbeitendeSeite.innerHTML = "";

        //Platzhalter ersetzen
        let template = document.getElementById("template-serien-bearbeiten").innerHTML;
        this.bearbeitendeSeite.innerHTML = template;
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$TITEL$", this._serie.titel);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$JAHR$", this._serie.jahr);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$GENRE$", this._serie.genre);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$ALTER$", this._serie.alter);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$STAFFELN$", this._serie.staffeln);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$FOLGEN$", this._serie.folgen);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$LAENGE$", this._serie.laenge);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$SPRACHE$", this._serie.sprache);
        this.bearbeitendeSeite.innerHTML = this.bearbeitendeSeite.innerHTML.replace("$BEWERTUNG$", this._serie.bewertung);



        let saveButton = this.bearbeitendeSeite.querySelector(".action.save");
        saveButton.addEventListener("click", () => this.speichern());
    }

    // Speichern des Datensatzes in die Übersicht
    speichern() {
        // Eingegebene Werte überprüfen
        let titel = document.querySelector("#serienBearbeitenSeite .titel").value.trim();
        let jahr = document.querySelector("#serienBearbeitenSeite .jahr").value.trim();
        let genre = document.querySelector("#serienBearbeitenSeite .genre").value.trim();
        let alter = document.querySelector("#serienBearbeitenSeite .alter").value.trim();
        let staffeln= document.querySelector("#serienBearbeitenSeite .staffeln").value.trim();
        let folgen= document.querySelector("#serienBearbeitenSeite .folgen").value.trim();
        let laenge = document.querySelector("#serienBearbeitenSeite .laenge").value.trim();
        let sprache = document.querySelector("#serienBearbeitenSeite .sprache").value.trim();
        let bewertung = document.querySelector("#serienBearbeitenSeite .bewertung").value.trim();

        //Sicher gehen, dass ein Titel eingegeben wurde
        if (titel == "") {
            alert("Geben Sie bitte einen Titel ein.");
            return;
        }
        // Sicher gegen, dass eine ganzstellige Bewertung zwischen 0-5 eingegeben wurde
        if (bewertung == "") {
            alert("Geben Sie bitte eine ganzahlige Bewertung zwischen 0 und 5 ein.");
            return;
        }
        else if(bewertung !=0 && bewertung != 1 && bewertung !=2 && bewertung !=3 && bewertung !=4 && bewertung !=5){
          alert("Geben Sie bitte eine ganzahlige Bewertung zwischen 0 und 5 ein.");
          return;
        }



        // Datensatz speichern
        this._serie.titel = titel;
        this._serie.jahr = jahr;
        this._serie.genre = genre;
        this._serie.alter = alter;
        this._serie.staffeln = staffeln;
        this._serie.folgen = folgen;
        this._serie.laenge = laenge;
        this._serie.sprache = sprache;
        this._serie.bewertung = bewertung;



        if (this._editIndex > -1) {
            this._app.inhaltBearbeitenByIndex(this._editIndex, this._serie);
        } else {
            this._app.inhaltHinzufuegen(this._serie);
        }

        // Wieder die Übersicht anzeigen
        this._app.seiteAnzeigen("page-list");
    }
}
