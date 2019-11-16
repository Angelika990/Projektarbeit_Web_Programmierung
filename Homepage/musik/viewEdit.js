class ViewEdit {

    constructor(app, pageName, editIndex) {

        this._app = app;
        this._editIndex = editIndex;

         // read element by ID
        this.editedPage = document.getElementById("musicEditPage");

        // read in selected data
        this._music = {

            titel: "",
            kunstler: "",
            jahr: "",
            genre: "",
            album: "",
            sprache: "",
            laenge: "",
            link: "",
            bewertung: "",

        };

        if (this._editIndex > -1) {
            let music = this._app.readDataByIndex(this._editIndex);

            this._music.titel = music.titel;
            this._music.kunstler = music.kunstler;
            this._music.jahr = music.jahr;
            this._music.genre = music.genre;
            this._music.album = music.album;
            this._music.sprache = music.sprache;
            this._music.laenge = music.laenge;
            this._music.link = music.link;
            this._music.bewertung = music.bewertung;


        }
    }

    // show list view
    show() {
        this.newPost();
        this.editedPage.classList.remove("hidden");
    }

    // hide list view
    hide() {
        this.editedPage.classList.add("hidden");
    }
    // new data
    newPost() {
        this.editedPage.innerHTML = "";

        let template = document.getElementById("musicTemplateEdit").innerHTML;
        this.editedPage.innerHTML = template;
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$TITEL$", this._music.titel);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$KUNSTLER$", this._music.kunstler);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$JAHR$", this._music.jahr);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$GENRE$", this._music.genre);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$ALBUM$", this._music.album);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$SPRACHE$", this._music.sprache);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$LAENGE$", this._music.laenge);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$LINK$", this._music.link);
        this.editedPage.innerHTML = this.editedPage.innerHTML.replace("$BEWERTUNG$", this._music.bewertung);



        let saveButton = this.editedPage.querySelector(".doThing.save");
        saveButton.addEventListener("click", () => this.safeData());
    }

    // safe data in list view menu
    safeData() {
        let titel = document.querySelector("#musicEditPage .titel").value.trim();
        let kunstler = document.querySelector("#musicEditPage .kunstler").value.trim();
        let jahr = document.querySelector("#musicEditPage .jahr").value.trim();
        let genre = document.querySelector("#musicEditPage .genre").value.trim();
        let album= document.querySelector("#musicEditPage .album").value.trim();
        let sprache= document.querySelector("#musicEditPage .sprache").value.trim();
        let laenge = document.querySelector("#musicEditPage .laenge").value.trim();
        let link = document.querySelector("#musicEditPage .link").value.trim();
        let bewertung = document.querySelector("#musicEditPage .bewertung").value.trim();

        //empty titel reaction
        if (titel == "") {
            swal("Gebe bitte den Songtitel an.");
            return;
        }

        // safe data
        this._music.titel = titel;
        this._music.kunstler = kunstler;
        this._music.jahr = jahr;
        this._music.genre = genre;
        this._music.album = album;
        this._music.sprache = sprache;
        this._music.laenge = laenge;
        this._music.link = link;
        this._music.bewertung = bewertung;



        if (this._editIndex > -1) {
            this._app.editContentByIndex(this._editIndex, this._music);
        } else {
            this._app.addContent(this._music);
        }

        // show list view
        this._app.showView("viewList");
    }
}
