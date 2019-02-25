function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag=1;
	var respuesta;
	
	
	/*do{
numero=parseFloat(prompt("ingrese un numero: "));
positivo= positivo+numero;
respuesta=prompt("quiere continuar").toLowerCase();
}while(respuesta=="s" && numero>=0);
do{
	numero=parseFloat(prompt("ingrese un numero: "));
	negativo= negativo*numero;
	respuesta=prompt("quiere continuar").toLowerCase();
} while(respuesta=="s" && numero<=-1);*/
do{
	numero=parseFloat(prompt("ingrese un numero: "));
	respuesta=prompt("quiere continuar").toLowerCase();
	if(numero>=0)
	{ positivo= positivo+numero;
		} 
		
	else{ 
		negativo= negativo*numero;
		flag=1;}
} while(respuesta=="s");
document.getElementById('suma').value=positivo;
if(flag==0){
	negativo=0;
	}
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN