function esPar(numero) {

    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function resto(numero1, numero2) {
    let divisionEntera = parseInt(numero1 / numero2);
    let productoEntero = divisionEntera * numero2;

    return numero1 - productoEntero;
}

function imprimirSimbolo(n, caracter) {
    let mensaje = "";

    for (let i = 0; i < n; i++) {
        mensaje += caracter;
    }

    return mensaje;
}

function esVocal(caracter) {
    const vocales = /[aeiouAEIOU]/;

    return vocales.test(caracter);
}

function sucesion(a, b) {
    let sucecion = [];

    for (let i = a; i <= b; i++) {
        sucecion.push(i);
    }

    return sucecion;
}

function esMultiplo(a, b) {
    if (a % b == 0 || b % a == 0) {
        return true;
    } else {
        return false;
    }
}

function listarDivisores(numero) {
    let PRIMER_DIVISOR = 1;
    let candidatos = sucesion(PRIMER_DIVISOR, numero);
    let listaDivisores = [];

    candidatos.forEach((valor) => {
        if (esMultiplo(valor, numero)) {
            listaDivisores.push(valor);
        }
    })
    return listaDivisores;
}

function cantidadDivisores(numero) {
    let listaDivisores = listarDivisores(numero);

    return listaDivisores.length;
}

function esPrimo(numero) {
    if (cantidadDivisores(numero) > 2) {
        return false;
    } else {
        return true;
    }
}

function listarPrimos(cantidad) {
    let candidato = 1;
    let listaPrimos = [];

    for (let contador = 1; contador <= cantidad; contador++) {
        while(!esPrimo(candidato)) {
            candidato++;
        }
        listaPrimos.push(candidato);
        candidato++;
    }

    return listaPrimos;
}

function mostrarPrimos(cantidad) {
    let lista = listarPrimos(cantidad);
    console.log(lista.toString());
}

function sumarLista(lista) {
    let total = 0;

    lista.forEach((valor) => {
        total += valor;
    });

    return total;
}

// un numero perfecto es aquel que es igual a la suma de todos sus divisores, excluyendo el numero en si.
function esNumeroPerfecto(numero) {
    //llistamos todos los divisores de numero  
    let listaDivisores = listarDivisores(numero);
    //quitamos el numero propio de la lista de divisores
    listaDivisores.pop();
    //sumamos todos los divisores
    let suma = sumarLista(listaDivisores);
    //comparamos esa suma con el numero, si la suma es igual el numero es perfecto y se devuelve true.
    return (suma == numero)
}