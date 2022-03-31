// const nombre = document.getElementById("nombre");
// const nombre = document.getElementsByClassName(".parrafo");
// const nombre = document.querySelector(".parrafo");
// const nombre = document.querySelectorAll(".parrafo");

const nombre = document.getElementById("nombre");
const num = document.getElementById("num");

let nuevoNombre = prompt("Ingrese un nombre");
nombre.textContent = nuevoNombre;

let numero = prompt("Ingrese un número");
let a = 2;
let suma = parseInt(numero) + a;
// alert(suma);
num.textContent = suma;
console.log(nombre);

// TODO: Consultar los operadores relacionales ==, ===, !=, !==
// TODO: Consultar los operadores lógicos para AND, OR, NOT


// AND - LÓGICO
v =  vaca && vaca;     // t && t devuelve true
d =  true && false;    // t && f devuelve false
d1 = false && true;     // f && t devuelve false
f = true && (2 == 4); // f && f devuelve false
d2 = 'Casa' && 'Apartamento';    // t && t devuelve Apartamento
a6 = false && 'Cat';    // f && t devuelve false
a7 = 'Cat' && false;    // t && f devuelve false

// OR - LÓGICO

o1 =  true || true;     // t || t devuelve true
o2 = false || true;     // f || t devuelve true
o3 =  true || false;    // t || f devuelve true
o4 = false || (3 == 4); // f || f devuelve false
o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
o6 = false || 'Cat';    // f || t devuelve Cat
o7 = 'Cat' || false;    // t || f devuelve Cat


// NOT - LÓGICO

n1 = !true;  // !t devuelve false
n2 = !false; // !f devuelve true
n3 = !'Cat'; // !t devuelve false
