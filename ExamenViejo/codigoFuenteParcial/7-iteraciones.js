//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var sexo;
    var nota;
    var notabaja;
    var contadorvaronesmas6=0;
    var acumuladornotas=0;
    var flag=0;
    var promedio;
    
     
   
    promedio=parseFloat(" el promedio total es");
    for(var i=0;i<=6;i++){
nota=parseFloat(prompt("ingrese una nota: "));
        while(nota<0||nota>10|| isNaN(nota)){
 nota=parseFloat("error. Reingrese una nota");
        }
sexo=prompt("ingrese un sexo: ");
while(sexo!="m" && sexo!="f")
sexo=prompt("Error.Reingrese un sexo ");
acumuladornotas=acumuladornotas+ notas
 if(notas<notabaja ||flag==0){
     notabaja=nota;
     sexobajo=sexo;
     flag=1;
 }
if(sexo==" f "|| sexo==" m "){
    
}
if(promedio=notastotales/6){}
        }
    } alert("promedio de notas: ");

}promedio=acumuladordenotas/6
document.write("promedio de notas: "+ promedio+ "<br>");
document.write("nota mas baja: "+ notabaja+ "cuyo sexo es: "+ sexo + "<br>");
document.write("la cantidad de varones que su nota haya sido mayo a 6: " + sexo+ "<br>");