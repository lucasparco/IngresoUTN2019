/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ var ancho;
    var largo;
    var alambre;
    var perimetro;
    ancho= parseFloat(document.getElementById("Largo").value);
    largo= parseFloat(document.getElementById("Ancho").value);
perimetro= largo*2 + ancho*2;
alambre= perimetro*3;
alert("la cantidad de alambre es "+ alambre);
}
function Circulo () 
{ var radio;
    var alambre;
    radio= parseFloat(document.getElementById("Radio").value);
    alambre= 3.14*radio*2;
    alert("la cantidad de alambre a comprar es "+ alambre);


	
}
function Materiales () 
{ var largo;
    var ancho;
    var cal;
    var cemento;
    var superficie;
    largo= parseFloat(document.getElementById("Largo").value);
    ancho= parseFloat(document.getElementById("Ancho").value);
    superficie= largo*ancho;
    cemento= superficie*2;
    cal= superficie*3;
    alert("para una superficie de "+ superficie +"m2 necito comprar "+ cal +"bolsas de cal y "+ cemento +"bolsas de cemento"); 



	

}