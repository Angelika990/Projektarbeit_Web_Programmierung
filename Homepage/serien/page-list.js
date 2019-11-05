

class PageList {
    /**
     * @param {App} app Instanz der App-Klasse
     */
    constructor(app) {
        this._app = app;
        this._mainElement = document.getElementById("main-page-list");
    }


    show() {
        this._renderList();
        this._mainElement.classList.remove("hidden");
    }


    hide() {
        this._mainElement.classList.add("hidden");
    }

    _renderList() {

        let ol = document.querySelector("#main-page-list > ol");
        ol.innerHTML = "";


        let data = this._app.getData();

        if (data.length < 1) {
            let template = document.getElementById("template-page-list-empty").innerHTML;
            ol.innerHTML = template;
            return;
        }


        let template = document.getElementById("template-page-list-li").innerHTML;
        let index = -1;

        data.forEach(dataset => {

            index++;


            let temp = document.createElement("div");
            temp.innerHTML = template;

            temp.innerHTML = temp.innerHTML.replace("$TITEL$", dataset.titel);
            temp.innerHTML = temp.innerHTML.replace("$JAHR$", dataset.jahr);
            temp.innerHTML = temp.innerHTML.replace("$GENRE$", dataset.genre);
            temp.innerHTML = temp.innerHTML.replace("$ALTER$", dataset.alter);
            temp.innerHTML = temp.innerHTML.replace("$STAFFELN$", dataset.staffeln);
            temp.innerHTML = temp.innerHTML.replace("$FOLGEN$", dataset.folgen);
            temp.innerHTML = temp.innerHTML.replace("$LAENGE$", dataset.laenge);
            temp.innerHTML = temp.innerHTML.replace("$SPRACHE$", dataset.sprache);

            let _addEventListeners = (index) => {

                let editButton = temp.querySelector(".action.edit");
                editButton.addEventListener("click", () => this._app.showPage("page-edit", index));


                let deleteButton = temp.querySelector(".action.delete");
                deleteButton.addEventListener("click", () => this._askDelete(index));
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
    _askDelete(index) {



        this._app.deleteDataByIndex(index);

        this._renderList();
    }
}
