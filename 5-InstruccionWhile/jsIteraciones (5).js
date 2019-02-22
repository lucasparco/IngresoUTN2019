function Mostrar()
{

var sexo = prompt("ingrese f ó m ."). toLowerCase();



document.getElementById('Sexo').value=sexo;
while (!(sexo=="f"|| sexo=="m")) { 
    sexo= prompt(" error sexo invalidado, reingresar el sexo").toLowerCase();
    
} document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN