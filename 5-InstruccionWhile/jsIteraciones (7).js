function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta;
do{
numero=parseFloat(prompt("ingrese un numero: "));
acumulador= acumulador+numero;
contador= contador+1;
respuesta=prompt("quiere continuar").toLowerCase();
}while(respuesta=="s");
promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN