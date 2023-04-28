// Constantes para todos los ejercicios
const CANCELADO = "No ingresó un dato válido o bien presionó cancelar. Programa terminado.";
const CANTIDAD_NUMEROS = 10;
const CANTIDAD_CARACTERES = 9;

// funciones para usar en todos los ejercicios
// muestra informacion en la consola
function mostrar(mensaje) {
    console.log(mensaje);
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



// pide una lista de numeros, calcula el promedio, y luego muestra ese promedio y lista los numero por arriba del promedio.
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
        let respuesta = parseFloat(prompt(`Ingrese un numero (${i} de ${cantidad}).`));
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

}
