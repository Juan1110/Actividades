const numIntento = document.getElementById("numIntento");
const btnAdivinar = document.getElementById("btnAdivinar");
const intentos = document.getElementById("intentos");
const ultimoResultado = document.getElementById("ultimoResultado");
const altoBajo = document.getElementById("altoBajo");

let numeroAleatorio = Math.floor(Math.random() * 100 + 1);

numIntento.value = "";
let cantidadIntentos = 0;

function verificarIntento()
{
    let intentoUsuario = Number(numIntento.value);

    if(cantidadIntentos === 1)
        intentos.textContent = "Intentos anteriores: ";

    intentos.textContent += intentoUsuario + ' ';

    if(intentoUsuario === numeroAleatorio)
    {
        ultimoResultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
        ultimoResultado.style.backgroundColor = "green"
    } else if(cantidadIntentos === 10) {
        ultimoResultado.textContent = "¡Fin del juego!";
        altoBajo.textContent = "";
    } else {
        ultimoResultado.textContent = "¡Incorrecto!";
        ultimoResultado.style.backgroundColor = "red"
        if(intentoUsuario < numeroAleatorio)
        {
            altoBajo.textContent = "El número es muy bajo"
        } else {
            altoBajo.textContent = "El número es muy alto"
        }
    }

    cantidadIntentos ++;
    numIntento.vale = "";
    numIntento.focus();
}

function finalizarJuego()
{
    numIntento.disabled = true;
    btnAdivinar.disabled = true;
}

btnAdivinar.addEventListener('click', verificarIntento);
 