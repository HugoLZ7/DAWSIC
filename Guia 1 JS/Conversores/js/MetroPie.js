var pies;
var metros = prompt('Ingrese la cantidad a convertir en metros:','');  

//Convertimos de metros a pies utilizando la constante 3.281 (1 m = 3.281 pies)
pies = (metros * 3.281); 

//Redondeamos a dos decimales para mostrar solo 2 decimales
document.write("<header><h1>La conversion en pies es: " + Math.round(pies,2) + "</h1><hr /><br /></header>"); 