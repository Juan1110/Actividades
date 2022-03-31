// const nombre = document.getElementById("nombre");
// const nombre = document.getElementsByClassName(".parrafo");
// const nombre = document.querySelector(".parrafo");
// const nombre = document.querySelectorAll(".parrafo");

const nombre = document.getElementById("nombre");

let nuevoNombre = prompt("Ingrese un nombre");

nombre.textContent = nuevoNombre;

console.log(nombre);