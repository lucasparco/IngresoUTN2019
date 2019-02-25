function Mostrar()
{
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	var contador=0

	do{
		numero=parseFloat(prompt("ingrese un numero: "));
		respuesta=prompt("quiere continuar").toLowerCase();
	
	if(numero> maximo||numero>flag==0){
		maximo=numero;
	}
	if(numero<minimo||numero<flag==0){
		minimo=numero;}
	
	}while(respuesta="s");
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;





}//FIN DE LA FUNCIÓN