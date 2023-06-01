const prompt = require("prompt-sync")();

// const esPar = (num) => {
//     if(num % 2 === 0){
//         return "El número es par"
//     }
//     return "El número es impar"
// }

// // const esMultiplo3 = (num) => {
// //     if(num % 3 === 0){
// //         return true
// //     }
// //     return false
// // }

// const esMultiplo = (num, multiplo) => {
//     if(num % multiplo === 0){
//         return `El número ${num} es múltiplo de ${multiplo}`
//     }
//     return `El número ${num} no es múltiplo de ${multiplo}`
// }
// console.log("¿Qué quieres saber?")
// console.log("1. Si es par o impar")
// console.log("2. Si es múltiplo de 3")
// let opcionElegida = prompt("Elige una opción - ")
// let numeroComprobar = Number(prompt("Di un número - "))


// switch(opcionElegida){
//     case "1":
//         console.log(esPar(numeroComprobar))
//         break;
//     case "2":
//         console.log(esMultiplo(numeroComprobar, 3))
//         break;
//     default:
//         console.log("Elige una opción válida")
// }


// let numeroComprobar = prompt("Di un número")
// let multiploQueQuiero = prompt("¿De qué número quieres saber si es múltiplo?")

// console.log(esMultiplo3(numeroComprobar))

// console.log(esMultiplo(numeroComprobar, 2))
// console.log(esMultiplo(numeroComprobar, multiploQueQuiero))


// ///////////////////////////////////////////////

// OBJETO
let persona = {
    nombre: "Mara",
    edad: 30
}

// ARRAYS
let nombres = ["Mara", "David", "Álvaro", "Fran", "Maxi"]


// console.log(nombres[1])
// // console.log(nombres.length)
// // PARA SACAR ÚLTIMO ELEMENTO DEL ARRAY
// nombres.pop()
// console.log(nombres)
// // PARA METER UN ELEMENTO AL FINAL DEL ARRAY
// nombres.push("Maxi")
// console.log(nombres)
// // PARA SACAR PRIMER ELEMENTO DEL ARRAY
// nombres.shift()
// console.log(nombres)
// // PARA METER UN ELEMENTO EN PRIMERA POSICIÓN DEL ARRAY
// nombres.unshift("Mara")
// console.log(nombres)


////////////////////////

// let nombres1 = ["Mara", "David"]
// let nombres2 = ["Álvaro", "Fran", "Maxi"]

// let nombresConcatenados = nombres1.concat(nombres2)
// console.log(nombresConcatenados)

// nombresConcatenados.reverse()

// console.log(nombresConcatenados.join(" - "))


// 

let stringLetras = "TRWAGMYFPDXBNJZSQVHLCKET"
let arrayLetras = stringLetras.split("")

let dniCompleto = prompt("Introduce tu DNI - ")

let letra = dniCompleto[dniCompleto.length-1]
let numero = dniCompleto.slice(0, dniCompleto.length - 1)

const comprobarDni = (num, letra) => {
    let modulo = num % 23
    console.log("EL RESTO DE LA DIVISIÓN ES ", modulo)
    console.log("LA LETRA CORRECTA ES - ", arrayLetras[modulo])
    if(arrayLetras[modulo] == letra){
        return "El DNI es válido"
    } else {
        return "El DNI no es válido"
    }
}

console.log(comprobarDni(numero, letra))

const sacarLetraDNI = (num) => {
    let modulo = num % 23
    let letra = arrayLetras[modulo]

    return `La letra es ${letra}`
}

console.log(sacarLetraDNI(dniCompleto))
