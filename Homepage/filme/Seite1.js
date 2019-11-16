




//verantwortlich für das ein- und ausschalten des Eingabefeldes


function plusButton() {
  var x = document.getElementById("sometimesThere");
x.style.display = "block";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"; //hide the element
  }
}
function showDiv() {
   document.getElementById('sometimesThere').style.display = "block";
}

// ab hier beginnt der Film-Einträgungsteil

var dieFilmliste = document.getElementsByTagName("sometimesThere");
var i;
for (i = 0; i < dieFilmliste.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  dieFilmliste[i].appendChild(span);
}


// Create a new list item when clicking on the "Add" button
function neuerEintrag() {
  var li = document.createElement("li");

//Hier wird die Eingabe für Titel ausgewertet
    var q = document.createTextNode("Titel: ");
    var inputValue = document.getElementById("titel").value;
    var r = document.createElement("br");
    var a = document.createTextNode(inputValue);
    li.appendChild(q);
    li.appendChild(a);
    li.appendChild(r);

  var j = document.createTextNode("Erscheinungsjahr: ");
  var inputValue = document.getElementById("erscheinungsjahr").value;
  var s = document.createElement("br");
  var b = document.createTextNode(inputValue);
  li.appendChild(j);
  li.appendChild(b);
  li.appendChild(s);

  var k = document.createTextNode("Genre: ");
  var inputValue = document.getElementById("genre").value;
  var t = document.createElement("br");
  var c = document.createTextNode(inputValue);
  li.appendChild(k);
  li.appendChild(c);
  li.appendChild(t);


  var l = document.createTextNode("FSK: ");
  var inputValue = document.getElementById("fsk").value;
  var u = document.createElement("br");
  var d = document.createTextNode(inputValue);
  li.appendChild(l);
  li.appendChild(d);
  li.appendChild(u);


  var m = document.createTextNode("Filmlänge: ");
  var inputValue = document.getElementById("filmlänge").value;
  var v = document.createElement("br");
  var e = document.createTextNode(inputValue);
  li.appendChild(m);
  li.appendChild(e);
  li.appendChild(v);


  var n = document.createTextNode("Eigene Bewertung: ");
  var inputValue = document.getElementById("eigeneBewertung").value;
  var w = document.createElement("br");
  var f = document.createTextNode(inputValue);
  li.appendChild(n);
  li.appendChild(f);
  li.appendChild(w);


  var o = document.createTextNode("Link zum Trailer: ");
  var inputValue = document.getElementById("linkZumTrailer").value;
  var x = document.createElement("br");
  var g = document.createTextNode(inputValue);
  li.appendChild(o);
  li.appendChild(g);
  li.appendChild(x);


  var p = document.createTextNode("Sprache: ");
  var inputValue = document.getElementById("sprache").value;
  var y = document.createElement("br");
  var h = document.createTextNode(inputValue);
  li.appendChild(p);
  li.appendChild(h);
  li.appendChild(y);






  if (inputValue === '') {
    alert("Du musst alle Felder bearbeiten!");
  } else {
    document.getElementById("filmeListe").appendChild(li);
  }


  document.getElementById("titel").value = "";
  document.getElementById("erscheinungsjahr").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("fsk").value = "";
  document.getElementById("filmlänge").value = "";
  document.getElementById("eigeneBewertung").value = "";
  document.getElementById("linkZumTrailer").value = "";
  document.getElementById("sprache").value = "";

  // Create a "close" button and append it to each list item
  var dieListe = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < dieListe.length; i++) {
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   dieListe[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
   close[i].onClick = function() {
     var div = this.parentElement;
     div.style.display = "block";

   }
  }




  //verantwortlich für das ein- und ausschalten des Eingabefeldes


  function plusButton() {
    var x = document.getElementById("sometimesThere");
  x.style.display = "block";
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none"; //hide the element
    }
  }
  function showDiv() {
     document.getElementById('sometimesThere').style.display = "block";
  }

  // ab hier beginnt der Film-Einträgungsteil

  var dieFilmliste = document.getElementsByTagName("sometimesThere");
  var i;
  for (i = 0; i < dieFilmliste.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    dieFilmliste[i].appendChild(span);
  }


  // Create a new list item when clicking on the "Add" button
  function neuerEintrag() {
    var li = document.createElement("li");

  //Hier wird die Eingabe für Titel ausgewertet
      var q = document.createTextNode("Titel: ");
      var inputValue = document.getElementById("titel").value;
      var r = document.createElement("br");
      var a = document.createTextNode(inputValue);
      li.appendChild(q);
      li.appendChild(a);
      li.appendChild(r);

    var j = document.createTextNode("Erscheinungsjahr: ");
    var inputValue = document.getElementById("erscheinungsjahr").value;
    var s = document.createElement("br");
    var b = document.createTextNode(inputValue);
    li.appendChild(j);
    li.appendChild(b);
    li.appendChild(s);

    var k = document.createTextNode("Genre: ");
    var inputValue = document.getElementById("genre").value;
    var t = document.createElement("br");
    var c = document.createTextNode(inputValue);
    li.appendChild(k);
    li.appendChild(c);
    li.appendChild(t);


    var l = document.createTextNode("FSK: ");
    var inputValue = document.getElementById("fsk").value;
    var u = document.createElement("br");
    var d = document.createTextNode(inputValue);
    li.appendChild(l);
    li.appendChild(d);
    li.appendChild(u);


    var m = document.createTextNode("Filmlänge: ");
    var inputValue = document.getElementById("filmlänge").value;
    var v = document.createElement("br");
    var e = document.createTextNode(inputValue);
    li.appendChild(m);
    li.appendChild(e);
    li.appendChild(v);


    var n = document.createTextNode("Eigene Bewertung: ");
    var inputValue = document.getElementById("eigeneBewertung").value;
    var w = document.createElement("br");
    var f = document.createTextNode(inputValue);
    li.appendChild(n);
    li.appendChild(f);
    li.appendChild(w);


    var o = document.createTextNode("Link zum Trailer: ");
    var inputValue = document.getElementById("linkZumTrailer").value;
    var x = document.createElement("br");
    var g = document.createTextNode(inputValue);
    li.appendChild(o);
    li.appendChild(g);
    li.appendChild(x);


    var p = document.createTextNode("Sprache: ");
    var inputValue = document.getElementById("sprache").value;
    var y = document.createElement("br");
    var h = document.createTextNode(inputValue);
    li.appendChild(p);
    li.appendChild(h);
    li.appendChild(y);






    if (inputValue === '') {
      alert("Du musst alle Felder bearbeiten!");
    } else {
      document.getElementById("filmeListe").appendChild(li);
    }


    document.getElementById("titel").value = "";
    document.getElementById("erscheinungsjahr").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("fsk").value = "";
    document.getElementById("filmlänge").value = "";
    document.getElementById("eigeneBewertung").value = "";
    document.getElementById("linkZumTrailer").value = "";
    document.getElementById("sprache").value = "";

    //Löschen-Button erstellen
    var dieFilmliste = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < dieFilmliste.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      dieFilmliste[i].appendChild(span);
    }


  }





// Click on a close button to hide the current list item
function close(){
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
 close[i].onClick = function() {
   var div = this.parentElement;
   div.style.display = "none";
 }
}
}
}
