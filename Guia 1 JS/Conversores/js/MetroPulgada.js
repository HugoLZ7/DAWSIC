var pulgadas;
var metros = prompt('Ingrese la cantidad a convertir en metros:','');  

//Convertimos de metros a pies utilizando la constante 3.281 (1 m = 3.281 pies)
pulgadas = (metros * 39.37); 

//Redondeamos a dos decimales para mostrar solo 2 decimales
document.write("<header><h1>La conversion en pulgadas es: " + Math.round(pulgadas,2) + "</h1><hr /><br /></header>"); 