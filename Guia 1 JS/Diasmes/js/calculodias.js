var mes = prompt("Ingrese el mes: ", "");
var year = prompt("Ingrese el año: ", "");
var diasdelmes;
var bisiesto = false;
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
  bisiesto = true;
}
switch (mes) {
  case "Enero":
  case "enero":
  case "Marzo":
  case "marzo":
  case "Mayo":
  case "mayo":
  case "Julio":
  case "julio":
  case "Agosto":
  case "agosto":
  case "Octubre":
  case "octubre":
  case "Diciembre":
  case "diciembre":
    diasdelmes = 31;
    break;
  case "Abril":
  case "abril":
  case "Junio":
  case "junio":
  case "Septiembre":
  case "septiembre":
  case "Noviembre":
  case "noviembre":
    diasdelmes = 30;
    break;
  case "Febrero":
  case "febrero":
    if (!bisiesto) diasdelmes = 28;
    else diasdelmes = 29;
    break;
  default:
    alert("El mes " + mes + " no existe");
    mes = "No existe";
    diasdelmes = 0;
}
if (bisiesto == true) {
  var msg = "El año " + year + " es bisiesto.<br />El mes de " + mes + " tiene " + diasdelmes + " días.";
} else {
  var msg ="El año " + year +" no es bisiesto.<br />El mes de " + mes +" tiene " + diasdelmes + " días.";
}
//Variable para hacer referencia al elemento DIV
//donde se mostrará el número de años, meses y días
//que ha vivido la persona
var dias = document.getElementById("info");
dias.innerHTML = "<h3>" + mes + " " + year + "</h3>";
dias.innerHTML += '<div class="card" style="width: 18rem;">';
dias.innerHTML += '<img class="card-img-top" style="  height: 200px; width: 200px" src="img/casa-9.jpg" alt="Card image cap">';
dias.innerHTML += '<div class="card-body">';
dias.innerHTML += '  <h5 class="card-title">' + diasdelmes + " dias</h5>";
dias.innerHTML += ' <p class="card-text">' + msg + "</p>";
dias.innerHTML += " </div>";
dias.innerHTML += "</div>";
