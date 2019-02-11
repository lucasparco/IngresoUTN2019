/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto;
    var producto2;
    var producto3;
    var resultado;
    producto=parseInt(document.getElementById("PrecioUno").value);
    producto2=parseInt(document.getElementById("PrecioDos").value);
    procucto3=parseInt(document.getElementById("PrecioTres").value);
    resultado=producto + producto2+ producto3;
    alert("la suma es" + resultado);

}
function Promedio () 
{
	var num1;
    var num2;
    var num3;
    var resultado;
    var promedio;
    num1= parseFloat(document.getElementById("PrecioUno").value);
    num2= parseFloat(document.getElementById("PrecioDos").value);
    num3= parseFloat(document.getElementById("PrecioTres").value);
    resultado= num1 + num2 + num3;
    promedio= suma/ 3;


}
function PrecioFinal () 
{
	var num1;
    var num2;
    var num3;
    var suma;
    var iva;
    var preciofinal;
    num1=parsefloat(document.getElementById("PrecioUno").value);
    num2=parsefloat(document.getElementById("PrecioDos").value);
    num3=parsefloat(document.getElementById("PrecioTres").value);
suma= num1 + num2 + num3;
iva= suma* 21/100;
preciofinal=suma+iva;
alert("el precio final con iva incluido es $"+ precioconiva); 

}