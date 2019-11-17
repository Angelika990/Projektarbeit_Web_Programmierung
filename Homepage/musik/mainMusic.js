class AppMusik {

    constructor(pages) {

        this._pages = pages;
        this.currentPage = null;

        // data from main list view
        this.content = [
            {
                titel: "Perfect",
                jahr: "2017",
                kunstler: "Ed Sheeran",
                genre:"Pop",
                laenge: "4:40 ",
                link: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
                bewertung:"5",
                sprache:"englisch",
                album:"÷",

            },
        ];

        // create menu
        this.createMenu();

        // button go with scrolling
        window.onscroll = function() {
          let plus = document.getElementById("1");
          let stay = plus.offsetTop;

          if (window.pageYOffset >= stay) {
            plus.setAttribute("name", "stay");
         } else {
            plus.removeAttribute("name");
          }
        };

    }

    // create menu und switch between
    createMenu() {
        let ul = document.querySelector("#musicMenu > ul");
        let template = document.getElementById("menuList").innerHTML;
        let idZahl = 1;

        this._pages.forEach(page => {
            if (page.hidden) return;

            let temp = document.createElement("ul");
            temp.innerHTML = template;
            temp.innerHTML = temp.innerHTML.replace("$NAME$", page.name);
            temp.innerHTML = temp.innerHTML.replace("$LABEL$", page.label);

            let li = temp.firstElementChild;
            li.addEventListener("click", () => this.showView(page.name));
            li.setAttribute("id", idZahl)

            //add element to menu
            temp.removeChild(li);
            ul.appendChild(li);
            idZahl++;
        });
    }

    // switch between page
    showView(name, editIndex) {
        let newPage = this._pages.find(seite => seite.name === name);

        if (newPage === undefined) {
            return;
        }

        if (this.currentPage != null) {
            this.currentPage.hide();
        }
        this.currentPage = new newPage.klass(this, name, editIndex);
        this.currentPage.show();

    // emphazise page
        document.querySelectorAll("#musicMenu li").forEach(li => li.classList.remove("active"));
        document.querySelectorAll(`#musicMenu li[data-page-name="${name}"]`).forEach(li => li.classList.add("active"));
    }

    //returns data with the passed index
      readDataByIndex(index) {
      return this.content[index];
    }

    // returns the complete list with all data
    readContent() {
        return this.content;
    }


    //updates data with the passed index and overwrites it with the object also passed
    editContentByIndex(index, music) {
        this.content[index] = music;
    }

    //deletes data with the passed index
    deleteDataByIndex(index) {
        this.content.splice(index, 1);
    }

    // adds a new data at the bottom of the list
    addContent(music) {
        this.content.push(music);
        return this.content.length - 1;
    }

}
