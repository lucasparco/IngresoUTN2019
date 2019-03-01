//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{var numero;
    var numero;
    var resultado;
    var mensaje;
    numero=parseInt(prompt("ingrese un numero"));
    numero2=parseInt(prompt("ingrese otro numero"));
    
   
     if(numero==numero2){ 
         resultado=numero*numero2;
        mensaje="la multiplicacion es: " + resultado;}
     else if(numero > numero2){ 
         resultado=numero-numero2;
           mensaje="la resta es: " + resultado;}
     else{
         resultado= numero + numero2;
        mensaje="la suma es: " + resultado;}
        document.write(mensaje);


}

