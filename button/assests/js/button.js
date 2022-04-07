// const ocultar = document.getElementById("ocultar");
const btnOcul = document.getElementById("btnOcul");


 

function ocultar()
{
    document.getElementById('content').style.display = 'none';
    btnOcul.textContent = "Mostrar" 
    btnOcul.addEventListener("click", mostrar)

}
function mostrar()
{
    document.getElementById('content').style.display = 'block';
    btnOcul.textContent = "Ocultar" 
    btnOcul.addEventListener("click", ocultar)

}

btnOcul.addEventListener("click", ocultar)