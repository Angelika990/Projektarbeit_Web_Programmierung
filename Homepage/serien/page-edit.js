"use strict";


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

        this._mainElement = document.getElementById("main-page-edit");


        this._dataset = {
            titel: "",
            jahr: "",
            genre: "",
            alter: "",
            staffeln: "",
            folgen: "",
            laenge: "",
            sprache: "",
        };

        if (this._editIndex > -1) {
            let dataset = this._app.getDataByIndex(this._editIndex);

            this._dataset.titel = dataset.titel;
            this._dataset.jahr = dataset.jahr;
            this._dataset.genre = dataset.genre;
            this._dataset.alter = dataset.alter;
            this._dataset.staffeln = dataset.staffeln;
            this._dataset.folgen = dataset.folgen;
            this._dataset.laenge = dataset.laenge;
            this._dataset.sprache = dataset.sprache;
        }
    }


    show() {
        this._renderForm();
        this._mainElement.classList.remove("hidden");
    }


    hide() {
        this._mainElement.classList.add("hidden");
    }

    _renderForm() {

        this._mainElement.innerHTML = "";


        let template = document.getElementById("template-page-edit").innerHTML;
        this._mainElement.innerHTML = template;
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$TITEL$", this._dataset.titel);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$JAHR$", this._dataset.jahr);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$GENRE$", this._dataset.genre);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$ALTER$", this._dataset.alter);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$STAFFELN$", this._dataset.staffeln);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$FOLGEN$", this._dataset.folgen);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$LAENGE$", this._dataset.laenge);
        this._mainElement.innerHTML = this._mainElement.innerHTML.replace("$SPRACHE$", this._dataset.sprache);

        let saveButton = this._mainElement.querySelector(".action.save");
        saveButton.addEventListener("click", () => this._saveAndExit());
    }

    _saveAndExit() {

        let titel = document.querySelector("#main-page-edit .titel").value.trim();
        let jahr = document.querySelector("#main-page-edit .jahr").value.trim();
        let genre = document.querySelector("#main-page-edit .genre").value.trim();
        let alter = document.querySelector("#main-page-edit .alter").value.trim();
        let staffeln= document.querySelector("#main-page-edit .staffeln").value.trim();
        let folgen= document.querySelector("#main-page-edit .folgen").value.trim();
        let laenge = document.querySelector("#main-page-edit .laenge").value.trim();
        let sprache = document.querySelector("#main-page-edit .sprache").value.trim();

        if (titel === "") {
            alert("Geben Sie erst einen Titel ein.");
            return;
        }



        this._dataset.titel = titel;
        this._dataset.jahr = jahr;
        this._dataset.genre = genre;
        this._dataset.alter = alter;
        this._dataset.staffeln = staffeln;
        this._dataset.folgen = folgen;
        this._dataset.laenge = laenge;
        this._dataset.sprache = sprache;

        if (this._editIndex > -1) {
            this._app.updateDataByIndex(this._editIndex, this._dataset);
        } else {
            this._app.appendData(this._dataset);
        }


        this._app.showPage("page-list");
    }
}
