// Constantes para todos los ejercicios
const CANCELADO = "No ingresó un dato válido o bien presionó cancelar. Programa terminado.";
const CANTIDAD_NUMEROS = 10;
const CANTIDAD_CARACTERES = 9;

// funciones para usar en todos los ejercicios
// muestra informacion en la consola
function mostrar(mensaje) {
    console.log(mensaje);
}

function mostrarArray(array) {
    for (const elemento of array) {
        console.log(elemento);
    }
}

// abre un dialogo de alerta con un mensaje
function avisar(mensaje) {
    alert(mensaje);
}

// pregunta al usuario si desea continuar, devuelve true en caso afirmativo, false de otro modo. El mensaje tiene que estar redactado de modo que el usuario pueda contestar S por si o N por no sin lugar a confunsión.
function continuar(mensaje) {
    let continuar;

    do {
        let respuesta = prompt(`${mensaje} [S/N]`);
        if (respuesta == null) {
            return false;
        } else {
            continuar = respuesta.toUpperCase();
        }
    } while (continuar != "S" || continuar != "N")

    return (continuar == "S");
}

// Ejercicio 1 Arriba del Promedio
// pide una lista de 10 numeros, calcula el promedio, y luego muestra ese promedio y lista los numero por arriba del promedio.
function arribaDelPromedio () {
    let numeros = [];
    numeros = pedirNumeros(CANTIDAD_NUMEROS);
    if(numeros == null) {
        avisar(CANCELADO);
        return -1;
    }

    let promedio = calcularPromedio(numeros);

    mostrar(`El promedio es ${promedio}, y los valores por encima del promedio fueron:\n`);
    
    for (const numero of numeros) {
        if (numero > promedio) {
            mostrar(numero);
        }
    }
}

// pide una cantidad dada de numeros al usuario, devuelve un array no vacio con los numeros ingresados. Si el usuario, en cualquier momento, ingresa un dato que no es un número o preciona cancelar la función devuelve null
function pedirNumeros(cantidad) {
    let numeros = [];
    
    for (let i = 0; i < cantidad; i++) {
        let respuesta = parseInt(prompt(`Ingrese un numero (${i + 1} de ${cantidad}).`));
        if (isNaN(respuesta)) {
            return null;
        } else {
            numeros.push(respuesta);
        }
    }
    return numeros;
}

// recibe un array de numeros, calcula el promedio y lo devuelve
function calcularPromedio(numeros) {
    return sumarArray(numeros) / numeros.length;
}

// recibe un array y suma todos los valores numericos, ignora los valores que no sean numericos. Devuelve null si no recibe un array con al menos 1 elemento. Devuelve 0 si recibe un array con contenido pero sin numeros.
function sumarArray(array) {
    let suma = 0;
    if (array == null || array == undefined || array.length==0) {
        return null;
    } else {
        for(const elemento of array) {
            if (!isNaN(elemento)) {
                suma += elemento;
            }
        }
        return suma;
    }
}

// mostrar todos los múltiplos del último número en un array de 10.
function multiplosDelUltimo () {
    let numeros = [];
    numeros = pedirNumeros(CANTIDAD_NUMEROS);
    if(numeros == null) {
        avisar(CANCELADO);
        return -1;
    }

    let ultimo = numeros.pop();
    const multiplos = multiplosDe(numeros, ultimo);

    if (multiplos != null && multiplos.length > 0) {
        mostrar(`El último número de la lista es el ${ultimo}\nLos siguientes son todos los números de la lista que son múltiplos de ${ultimo}`);
        mostrarArray(multiplos);
    } else {
        avisar("Ningún número de la lista es múltiplo del último.");
    }
}

// devuelve un array multiplos que solo contiene aquellos elementos del array lista que son multiplos del numero indicado.
function multiplosDe(lista, numero) {

    const multiplos = [];
    if (lista.length == 0 || isNaN(numero)){
        return null;
    } else {
        for (const elemento of lista) {
            if (esMultiplo(elemento, numero)) {
                multiplos.push(elemento);
            }
        }
        return multiplos;
    }
}