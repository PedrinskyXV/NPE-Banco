function formateoNPE() {
    var txt = document.getElementById("txtNPE").value;
    var separador = " ";
    var result = txt.split(separador);
    var y = "";
    /* document.write('<p>La cadena original es: "' + txt + '"');
    document.write('<br>El separador es: "' + separador + '"');
    document.write("<br>El array tiene " + result.length + " elementos: "); */

   for (var i=0; i < result.length; i++) {
      y += result[i] + "-";
   }

    document.getElementById("txtResult").innerHTML = "NPE: " + y;
}

function hola() {
    alert('HOLA');
}