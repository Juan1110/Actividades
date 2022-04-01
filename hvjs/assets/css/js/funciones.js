const numClicDOM = document.getElementById("numClic");

let numeroClic = 0;

function contadorClic()
{
    // Cuerpo de la función

    numeroClic += 1;
    numClicDOM.textContent = numeroClic;
}