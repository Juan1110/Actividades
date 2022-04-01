const numIntento = document.getElementById("numIntento");
const btnAdivinar = document.getElementById("btnAdivinar");
const intentos = document.getElementById("intentos");
const ultimoResultado = document.getElementById("ultimoResultado");
const altoBajo = document.getElementById("altoBajo");

let numeroAleatorio = Math.floor(Math.random() * 100 + 1);

let cantidadIntentos = 0;



function verificarIntento()
{
    let intentoUsuario = Number(numIntento.value);

    if(cantidadIntentos === 0)
        intentos.textContent = "Intentos anteriores: ";

    intentos .textContent += intentoUsuario + '';
}

btnAdivinar.addEventListener('click', verificarIntento);
 