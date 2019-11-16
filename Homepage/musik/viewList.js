class ViewList {

    constructor(app) {
        this._app = app;
        this._mainElement = document.getElementById("musicList");
    }

    // show page
    show() {
        this.createList();
        this._mainElement.classList.remove("hidden");
    }

    // hide page
    hide() {
        this._mainElement.classList.add("hidden");
    }

    // crate list view page and give it to page
    createList() {

        let ol = document.querySelector("#musicList > ol");
        ol.innerHTML = "";


        let music = this._app.readContent();


        if (music.length < 1) {
            let template = document.getElementById("emptyListViewTemplate").innerHTML;
            ol.innerHTML = template;
            return;
        }

        //add data
        let template = document.getElementById("musicListViewOrder").innerHTML;
        let index = -1;



        music.forEach(music => {
            index++;

            let n = index.toString();

            // new list view entry
            let temp = document.createElement("div");
            temp.innerHTML = template;

            temp.innerHTML = temp.innerHTML.replace("$TITEL$", music.titel);
            temp.innerHTML = temp.innerHTML.replace("$KUNSTLER$", music.kunstler);
            temp.innerHTML = temp.innerHTML.replace("$JAHR$", music.jahr);
            temp.innerHTML = temp.innerHTML.replace("$GENRE$", music.genre);
            temp.innerHTML = temp.innerHTML.replace("$ALBUM$", music.album);
            temp.innerHTML = temp.innerHTML.replace("$SPRACHE$", music.sprache);
            temp.innerHTML = temp.innerHTML.replace("$LAENGE$", music.laenge);
            temp.innerHTML = temp.innerHTML.replace("$LINK$", music.link);
            temp.innerHTML = temp.innerHTML.replace("$BEWERTUNG$", music.bewertung);


            // index listener
            let _addEventListeners = (index) => {

                let editButton = temp.querySelector(".doThing.edit");
                editButton.addEventListener("click", () => this._app.showView("viewEdit", index));


                let deleteButton = temp.querySelector(".doThing.delete");
                deleteButton.addEventListener("click", () => this.deleteIndex(index));
            };

            _addEventListeners(index);

            // show
            let li = temp.firstElementChild;

            if (li) {
                temp.removeChild(li);
                ol.appendChild(li);
            }
        });
    }

    deleteIndex(index) {

        this._app.deleteDataByIndex(index);

        this.createList();
    }
}
