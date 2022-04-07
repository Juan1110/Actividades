const ocultar = document.getElementById("ocultar");
const btnOcul = document.getElementById("btnOcul");


 

function ocultar()
{
    document.getElementById('content').style.display = 'none';

}

btnOcul.addEventListener("click", ocultar)