// let numero = Math.random() * 5;

// console.log("Aleatorio: " + nota);

// if (numero <= 3)
// {
//     console.log("perdio la materia");
// }else if(nota <=  4) {
//      console.log("muy bien");
//  }else {
//      console.log("Excelente");
//  }

// console.log("-----------------------")

// let fruta = prompt("Ingrese el nombre de la fruta");

// if(fruta == "Manzana")
// {
//     console.log("La Manzana vale $10.000");
// } else if(fruta == "Pera"){
//     console.log("La Pera vale $15.000");
// } else if(fruta == "Limon"){
//     console.log("El Limon vale $6.000");
// } else if(fruta == "Mango"){
//     console.log("El Mango vale $8.000");
// } else {
//     console.log("Se nos agoto la fruta");
// } 

// switch(fruta){
//     case "Manzana":
//         alert("La Manzana vale $10.000");
//         break;
//     case "Pera":
//         alert("La Pera vale $15.000");
//         break
//     case "Limon":
//         alert("El Limon vale $6.000");
//         break    
//     case "Mango":
//         alert("El Mango vale $8.000");
//         break;
//     default:
//         alert("Se nos agoto la fruta");
// }

// for(let i = 1; i < 30; i++)
// {
//     console.log(i);
// }
// let candidato1 = 0;
// let candidato2 = 0;
// let candidato3 = 0;
// let candidato4 = 0;

// let voto = prompt("Ingrese el número del candidato de su preferencia: \n1. Cantidato 1. \n2. Cantidato 2. \n3. Cantidato 3. \n4. Cantidato 4.");

// switch(voto){
//     case "1":
//         candidato1++;
//         break;
//     case "2":
//         candidato2++;
//         break;
//     case "3":
//         candidato3++;
//         break;
//     case "4":
//         candidato4++;
//         break;

// }
let CantidadDeProyectos = 0;
let dineroEnCaja = Number(prompt("Ingrese el monto de dinero"));

while(dineroEnCaja > 0)
{
    let presupuestoProyecto = Number(prompt("Ingrese el monto del proyecto"));

    if(dineroEnCaja >= presupuestoProyecto)
    {
        alert("Se asignaron recursos para su proyecto");
        CantidadDeProyectos ++;
        dineroEnCaja -= presupuestoProyecto;
    }else{
        alert("El monto de su proyecto sobrepasa el presupuesto");
    }
    
}

alert("Se ha(n) aprobado: " + CantidadDeProyectos + " proyecto(s)");