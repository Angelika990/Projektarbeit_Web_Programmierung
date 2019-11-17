"use strict";

/**
 * Die Klasse App steuert die gesamte Anwendung.
 * Sie erstellt das Menüband,
 * zeigt die gewählte Seite und hebt diese im Menüband hervor,
 * enthält die Methode zum Hintergrund- bzw. Themewechsel,
 * und enthält die eigentliche Liste.
 */

class App {
    /**
     * @param {Liste} pages Seiten, zwischen denen umgeschaltet werden kann
     */
    constructor(pages) {

        this._pages = pages;
        this.aktuelleSeite = null;

        // Datensätze der Serienseite.
        this.inhalt = [
            {
                titel: "The Originals",
                jahr: "2013",
                genre: "Fantasy, Mystery, Drama",
                alter: "16",
                staffeln: "5",
                folgen: "92",
                laenge: "40",
                sprache: "Deutsch, Englisch",
                bewertung:"5",

            },
        ];


        // Aufrufen der Methode zur Erstellung des Menüs
        this.menueErstellen();

        // Funktion um den Plusbutton beim Scrollen festzusetzen.
        // Damit bei vielen Einträgen nicht ewig
        // nach oben gescrollt werden muss, bei gewünschten Neueintrag
        let plus = document.getElementById("1");
        window.onscroll = function() {
          let fest = plus.offsetTop;

          if (window.pageYOffset >= fest) {
            plus.setAttribute("name", "fest");
         } else {
          }
        };

    }

    // Menüband erstellen um zwischen der Listen- und Bearbeitungsseite zu springen
    menueErstellen() {
        let ul = document.querySelector("#serien-menu > ul");
        let template = document.getElementById("menueleiste").innerHTML;
        let idZahl = 1;

        this._pages.forEach(page => {
            //Überspringen der versteckten Seite (z.B. Serien bearbeiten)
            if (page.hidden) return;

            //Mit Hilfe des Templates wird ein neuer Serieneintrag aufgebaut
            let temp = document.createElement("ul");
            temp.innerHTML = template;
            temp.innerHTML = temp.innerHTML.replace("$NAME$", page.name);
            temp.innerHTML = temp.innerHTML.replace("$LABEL$", page.label);

            let li = temp.firstElementChild;
            li.addEventListener("click", () => this.seiteAnzeigen(page.name));
            // Für die getElementById-Methode
            // um den "+" Button  zu indentifizieren
            li.setAttribute("id", idZahl)

            //Element wird in das Menü angehängt
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
    // Zwischen sichtbaren Seiten wechseln
    seiteAnzeigen(name, editIndex) {
        // Seite suchen
        let neueSeite = this._pages.find(seite => seite.name === name);

        if (neueSeite === undefined) {
            return;
        }

        // Aktuelle Seite ausblenden
        if (this.aktuelleSeite != null) {
            this.aktuelleSeite.hide();
        }
        // Anzeigen der Seite, Seite wird gemerkt
        this.aktuelleSeite = new neueSeite.klass(this, name, editIndex);
        this.aktuelleSeite.show();

        // Aktuelle Seite wird im Menüband hervorheben
        document.querySelectorAll("#serien-menu li").forEach(li => li.classList.remove("active"));
        document.querySelectorAll(`#serien-menu li[data-page-name="${name}"]`).forEach(li => li.classList.add("active"));
    }

      // Methoden zum Bearbeiten der Datensätze

    /**
     * @param  {Integer} index Index des gewünschten Datensatzes
     * @return {Object} Gewünschter Datensatz oder undefined
     * Gibt den Datensatz mit dem übergebenen Index zurück. Kann der Datensatz
     * nicht gefunden werden, wird undefined zurückgegeben.
     */
      inhaltAuslesenByIndex(index) {
      return this.inhalt[index];
    }

    /**
     * Gibt die komplette Liste mit allen Daten zurück.
     * @return {Array} Array mit allen Datenobjekten
     */
    inhaltAuslesen() {
        return this.inhalt;
    }


    /**
     * @param {Integer} index Index des zu aktualisierenden Datensatzes
     * @param {Object} serie Neue Daten des Datensatzes
     *
     * Aktualisiert den Datensatz mit dem übergebenen Index und überschreibt
     * ihn mit dem ebenfalls übergebenen Objekt. Der Datensatz muss hierfür
     * bereits vorhanden sein.
     *
     */
    inhaltBearbeitenByIndex(index, serie) {
        this.inhalt[index] = serie;
    }

    /**
     * @param {[type]} index Index des zu löschenden Datensatzes
     * Löscht den Datensatz mit dem übergebenen Index. Alle anderen Datensätze
     * rücken dadurch eins vor.
     */
    inhaltloeschenByIndex(index) {
        this.inhalt.splice(index, 1);
    }

    /**
     * @param  {Object} serie Neu anzuhängender Datensatz
     * @return {Integer} Index des neuen Datensatzes
     * Fügt einen neuen Datensatz am Ende der Liste hinzu.
     */
    inhaltHinzufuegen(serie) {
        this.inhalt.push(serie);
        return this.inhalt.length - 1;
    }

}
