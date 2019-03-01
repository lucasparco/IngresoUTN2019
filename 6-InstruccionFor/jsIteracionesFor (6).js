function Mostrar()
{ var numero;
    var contador=0;
     numero=parseInt(prompt("ingrese un numero: "));
   while(numero<0|| isNaN(numero))
    numero=parseInt(prompt("error. ingrese un numero: "));
    for(i=0;i<=numero;i++){
       if(i/2==0){
           console.log(i);
      contador++;
} console.log("cantidad de pares"+ contador);
    }




}//FIN DE LA FUNCIÓN