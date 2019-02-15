function Mostrar()
{
//tomo la edad  
var edad;
edad= parseInt(document.getElementById("edad").value);
if(edad>=18){
    alert("es adulto");
}
else if(edad>=13){
    alert("es adolescente");
    }
    else{ alert("niño");}

}//FIN DE LA FUNCIÓN
