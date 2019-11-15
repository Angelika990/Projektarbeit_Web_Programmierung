//verantwortlich für das ein- und ausschalten des Eingabefeldes
function plusButton() {
  var x = document.getElementById("sometimesThere");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ab hier beginnen die Einträge
window.addEventListener("load", () => {
    let newButton = document.getElementById("abschickenButton")
    let memoList = document.querySelector("body > main > ul");

    let insertMemo = text => {
        let liElement = document.createElement("li");
        memoList.appendChild(liElement);

        let memoTextElement = document.createElement("p");
        memoTextElement.textContent = text;
        liElement.appendChild(memoTextElement);

        let deleteElement = document.createElement("a");
        deleteElement.textContent = "Löschen";
        deleteElement.classList.add("delete");
        liElement.appendChild(deleteElement);

        deleteElement.addEventListener("click", () => {
            liElement.parentNode.removeChild(liElement);
        });
    }
  }

  /*  insertMemo("Klicke auf „Neue Notiz”, um eine neue Notiz anzulegen …"); */

newbutton.addEventListener("click", () => {
  document.querySelector('titel').value;
  insertMemo("Titel: " + titel);
  if(titel === null) return;
}
)


/*
    // Event Handler für Anlage einer Notiz
    newButton.addEventListener("click", () => {
        // Memotext vom Anwender abfragen
        let titel = prompt("Titel: ");
        if (titel === null) return;

        // Neues Element in die HTML-Liste einfügen

        insertMemo("Titel: " + titel);

        let erscheinungsjahr = promp("Erscheinungsjahr: ");
        if(erscheinungsjahr === null) return;
        insertMemo("Erscheinungsjahr: " + erscheinungsjahr);

        let genre = promp("Genre: ");
        if(genre === null) return;
        insertMemo("Genre: " + genre);

        let fsk = promp("FSK: ");
        if(fsk === null) return;
        insertMemo("FSK: " + fsk);

        let filmlänge = promp("Filmlänge: ");
        if(filmlänge === null) return;
        insertMemo("Filmlänge: " + filmlänge);

        let eigeneBewertung = promp("Eigene Bewertung: ");
        if(eigeneBewertung === null) return;
        insertMemo("Eigene Bewertung: " + eigeneBewertung);

        let linkZumTrailer = promp("Link zum Trailer: ");
        if(linkZumTrailer === null) return;
        insertMemo("Link zum Trailer: " + linkZumTrailer);

        let sprache = promp("Sprache: ");
        if(sprache === null) return;
        insertMemo("Sprache: " + sprache);
*/
    });
});
