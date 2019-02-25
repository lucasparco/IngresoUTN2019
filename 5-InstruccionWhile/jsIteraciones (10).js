function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var acumneg=0;
	var acumpos=0;
	var contpos=0;
	var contneg=0;
	var contceros=0;
	var conpares=0;
	var promneg;
	var prompos;
	var diferencia;
	var respuesta;
do{ numero=parseFloat(prompt("ingrese un numero"));
respuesta=prompt("desea continuar").toLowerCase();
if(numero>0)
{acumpos= acumpos+numero;
contpos=0+1;}
else if(numero<=1){
	acumneg=acumneg+numero;
	contneg=contneg+1;}
	else{
		contceros=contceros+1;
	}
	prompos=acumpos/contpos;
promneg= acumneg/contneg;
diferencia= prompos-promneg;
}while(respuesta=="s");
document.write("1-suma de negativos: "+ acumneg + "<br>");
document.write("2-suma de positivos: " + acumpos + "<br>");
document.wirte("3-cantidad de positivos: " + contpos + "<br>"); 
document.write("4-cantidad de negativos: " + contneg + "<br>");
document.write("5-cantidad de ceros: "+ contceros+ "<br>");
document.write("6-cantidad de numeros pares: " + conpares + "<br>");
document.write("7-promedio de positivos: "+ prompos + "<br>");
document.wirte("8-promedio de negativos: "+ promneg + "<br>");
document.write("9-la diferencia entre positivos y negativos: " + diferencia + "<br>");


}while(respuesta="s");
	




}//FIN DE LA FUNCIÓN