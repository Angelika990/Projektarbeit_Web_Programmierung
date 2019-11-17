(function(){
  class Storage {
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    get(key) {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  class App {
    constructor() {
      this._storage = new Storage();
      this.books = this._storage.get('books') || [];
      this.newBookModal = $('#newBookModal');

      this.render();

      setInterval(() => {
        $('body').css('backgroundImage', `url("./gfx/bg-${Math.floor((Math.random() * 5) + 1)}.jpg")`);
      }, 1000 * 30)
    }

    store() {
      this._resetErrorHints();
      let error = false;

      const title = $('#title').val();
      if (!title) {
        error = true;
        $('#titleError').css('display', 'block');
      }

      const author = $('#author').val();
      if (!author) {
        error = true;
        $('#authorError').css('display', 'block');
      }

      const status = $('#status').val();
      if (status == 0) {
        error = true;
        $('#statusError').css('display', 'block');
      }

      const returnDate = $('#returnDate').val();
      if (!returnDate) {
        error = true;
        $('#returnDateError').css('display', 'block');
      }

      if (error) return;

      let curIncr = this._storage.get('increment');
      curIncr = curIncr ? curIncr+1 : 1;
      this._storage.set('increment', curIncr);

      this.books.push({
        id: curIncr,
        title: title,
        author: author,
        status: status,
        returnDate: returnDate,
      })

      this._storage.set('books', this.books);

      this._resetModal();
      this.render();
      this.newBookModal.modal('hide');
    }

    delete(id) {
      if (!confirm('Sicher?'))
        return;

      this.books = this.books.filter(book => {
        return book.id != id;
      });
      this._storage.set('books', this.books);
      this.render();
    }

    _resetModal() {
      this._clearModalInputs();
      this._resetErrorHints();
    }

    _clearModalInputs() {
      $('#title').val('');
      $('#author').val('');
      $('#status').val(0);
      $('#returnDate').val('');
    }

    _resetErrorHints() {
      $('#titleError').css('display', 'none');
      $('#authorError').css('display', 'none');
      $('#statusError').css('display', 'none');
      $('#returnDateError').css('display', 'none');
    }

    render() {
      const table = document.getElementById("bookTableBody");
      table.innerHTML = '';

      // set info when no books stored
      if (!this.books.length) {
        const placeholderCell = table.insertRow().insertCell(0);
        placeholderCell.innerHTML = `
          Keine Einträge vorhanden.<br>
          <a href="#" data-toggle="modal" data-target="#newBookModal">Buch hinzufügen</a>`;

        placeholderCell.setAttribute('colspan', '5');
        placeholderCell.setAttribute('class', 'text-center');

        return;
      }

      for (let i=0; i < this.books.length; i++) {
        this._fillRow(table.insertRow(), this.books[i]);
      }
    }

    _fillRow(row, book) {
      row.insertCell(0).innerHTML = book.title;
      row.insertCell(1).innerHTML = book.author;
      row.insertCell(2).innerHTML = book.status==1 ? 'gekauft' : 'geliehen';
      row.insertCell(3).innerHTML = this._gerDate(new Date(book.returnDate));
      row.insertCell(4).innerHTML = `
      <button onclick="app.delete(${book.id});" class="btn btn-secondary">
        Löschen!
      </button>
      `;
    }

    _gerDate(date) {
      return `${
        date.getDate() < 10 ? '0'+date.getDate() : date.getDate()
      }.${
        (date.getMonth()+1) < 10 ? '0'+(date.getMonth()+1) : (date.getMonth()+1)
      }.${date.getFullYear()}`;
    }
  }

  const app = new App();
})()
