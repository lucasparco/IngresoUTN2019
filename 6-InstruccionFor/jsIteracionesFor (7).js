function Mostrar()
{ var numero;
    var contador=0;
    numero=parseInt(prompt("ingrese un numero"));
    while(numero<0 || isNaN(numero)){
        numero=parseInt(prompt("Error. ingrese un numero mayor a 1"));}
        for(var i=1; i<=numero;i++){
            if(numero % i ==0){
                console.log(i);
                contador++;

        }

    }

    console.log("cantidad de divisores: "+ contador);
        


}//FIN DE LA FUNCIÓN