var presupuesto, derma, trauma, pediatria ;

presupuesto = parseFloat(prompt("Ingrese el presupuesto disponible:"));

derma = presupuesto * 0.4;
document.write("<div class='container-all'>");

document.write("<div>");
document.write("<h1>Calculo de Area Dermatologia</h1>");
document.write("<h3> El presupuesto para Dermatologia es de: "+ Math.round(derma,2) + "</h3>");
trauma = presupuesto * 0.3;
document.write("<h3> El presupuesto para Traumatologia es de: "+ Math.round(trauma,2) + "</h3>");
pediatria = presupuesto * 0.25;
document.write("<h3> El presupuesto para Pediatria es de: "+ Math.round(pediatria,2) + "</h3>");

document.write('<img src="/PresuHospital/img/hospital.avif" style="height: 300px;">'); 
document.write("</div>");

document.write("</div>");