let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;

let voto;

for(let i = 1; i < 13; i++)
{ 
    voto = prompt("Ingrese el número del candidato de su preferencia: \n1. Mateo. \n2. Mateo. \n3. Lucas. \n4. Juan.");

switch(voto) {
    case "1":
        candidato1++;
        break;
    case "2":
        candidato2++;
        break;
    case "3":
        candidato3++;
        break;
    case "4":
        candidato4++;
        break;
    default:
        voto ++;
        alert("Voto inválido, ingrese nuevamente su voto");
    }
}


$mensaje = "";
if(candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4)
{
    $mensaje += "Mateo";
}

else if (candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4)
{
    $mensaje += "Marcos";
}
else if (candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4)
{
    $mensaje += "Lucas";
}
else if (candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3)
{
    $mensaje += "Juan";
}
else
{
    $mensaje = "No hay ganador";
}

alert($mensaje);


// DINERO PARA PROYECTOS DEL ESTADO

// let CantidadDeProyectos = 0;
// let dineroEnCaja = Number(prompt("Ingrese el monto de dinero"));

// while(dineroEnCaja > 0)
// {
//     let presupuestoProyecto = Number(prompt("Ingrese el monto del proyecto"));

//     if(dineroEnCaja >= presupuestoProyecto)
//     {
//         alert("Se asignaron recursos para su proyecto");
//         CantidadDeProyectos ++;
//         dineroEnCaja -= presupuestoProyecto;
//     }else{
//         alert("El monto de su proyecto sobrepasa el presupuesto");
//     }
    
// }

// alert("Se ha(n) aprobado: " + CantidadDeProyectos + " proyecto(s)");