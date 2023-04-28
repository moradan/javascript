// funciones para usar en todos los ejercicios
function mostrar(mensaje) {
    console.log(mensaje);
}

function avisar(mensaje) {
    alert(mensaje);
}

function continuar() {
    let continuar;

    do {
        let respuesta = prompt("Desea continuar? [S/N]");
        if (respuesta == null) {
            return false;
        } else {
            continuar = respuesta.toUpperCase();
        }
    } while (continuar != "S" || continuar != "N")

    return (continuar == "S");
}

// Constantes para todos los ejercicios
const CANCELADO = "No ingresó un dato válido o bien presionó cancelar. Programa terminado.";
const CANTIDAD_NUMEROS = 10;
const CANTIDAD_CARACTERES = 9;

function arribaDelPromedio () {
    const CANCELADO = "Programa cancelado.";

    let numeros = [];
    numeros = pedirNumeros();
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

function pedirNumeros() {
    let numeros = [];
    
    for (let i = 0; i < CANTIDAD_NUMEROS; i++) {
        let respuesta = parseFloat(prompt("Ingrese un numero."));
        if (isNaN(respuesta)) {
            avisar(CANCELADO);
            return null;
        } else {
            numeros.push(respuesta);
        }
    }
    return numeros;
}
