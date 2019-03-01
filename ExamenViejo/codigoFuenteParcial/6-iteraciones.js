//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
	var importe;
    var mayor;
    var menor;
    var diamayor;
    var diamenor;
    var flaG;

    importe=parseFloat(prompt("ingrese un importe"));
    	for(var i=1; i<=7;i++){
        while(importe<0|| isNaN(importe)){
            importe=parsefloat(prompt("Error. Reingrese un importe correcto"));
        } 
        if(importe>mayor|| flag==0){
            mayor=importe;
            diamayor=i;
        }
        if(importe<menor|| flag==0){
            menor=importe;
            diamenor=i;
            falg=1;
        
        }
        }
	
}

