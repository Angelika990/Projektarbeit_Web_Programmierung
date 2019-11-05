"use strict";

class App {
    /**
     * @param {Liste} pages Seiten, zwischen denen umgeschaltet werden kann
     */
    constructor(pages) {

        this._pages = pages;
        this._currentPageObject = null;


        this._data = [
            {
                titel: "The Originals",
                jahr: "2013-2018",
                genre: "Fantasy, Mystery, Drama",
                alter: "16",
                staffeln: "5",
                folgen: "92",
                laenge: "ca. 40",
                sprache: "Deutsch, Englisch",
            },
        ];


        this._renderMenu();
    }


    _renderMenu() {
        let ul = document.querySelector("#serien-menu > ul");
        let template = document.getElementById("template-app-menu-li").innerHTML;

        this._pages.forEach(page => {

            if (page.hidden) return;


            let temp = document.createElement("ul");
            temp.innerHTML = template;
            temp.innerHTML = temp.innerHTML.replace("$NAME$", page.name);
            temp.innerHTML = temp.innerHTML.replace("$LABEL$", page.label);


            let li = temp.firstElementChild;
            li.addEventListener("click", () => this.showPage(page.name));


            temp.removeChild(li);
            ul.appendChild(li);
        }
      );
    }

    /**
     *
     * @param  {String} name Name der anzuzeigenden Seite, gemäß this.pages
     * @param  {Integer} editIndex Nummer des bearbeiteten Datensatzes (optional)
     */
    showPage(name, editIndex) {

        let newPage = this._pages.find(p => p.name === name);

        if (newPage === undefined) {
            return;
        }


        if (this._currentPageObject != null) {
            this._currentPageObject.hide();
        }

        this._currentPageObject = new newPage.klass(this, name, editIndex);
        this._currentPageObject.show();


        document.querySelectorAll("#serien-menu li").forEach(li => li.classList.remove("active"));
        document.querySelectorAll(`#serien-menu li[data-page-name="${name}"]`).forEach(li => li.classList.add("active"));
    }


    /**
     * @return {Array} Array mit allen Datenobjekten
     */
    getData() {
        return this._data;
    }

    /**
     * @param  {Integer} index Index des gewünschten Datensatzes
     * @return {Object} Gewünschter Datensatz oder undefined
     */
    getDataByIndex(index) {
        return this._data[index];
    }

    /**
     * @param {Integer} index Index des zu aktualisierenden Datensatzes
     * @param {Object} dataset Neue Daten des Datensatzes
     */
    updateDataByIndex(index, dataset) {
        this._data[index] = dataset;
    }

    /**
     * @param {[type]} index Index des zu löschenden Datensatzes
     */
    deleteDataByIndex(index) {
        this._data.splice(index, 1);
    }

    /**
     * @param  {Object} dataset Neu anzuhängender Datensatz
     * @return {Integer} Index des neuen Datensatzes
     */
    appendData(dataset) {
        this._data.push(dataset);
        return this._data.length - 1;
    }
}
