// Constantes para todos los ejercicios
const CANCELADO = "No ingresó un dato válido o bien presionó cancelar. Programa terminado.";
const CANTIDAD_NUMEROS = 10;
const CANTIDAD_CARACTERES = 9;
const CADENA_VACIA = "";

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

// pide una cantidad dada de numeros al usuario, devuelve un array no vacio con los numeros ingresados. Si el usuario, en cualquier momento, ingresa un dato que no es un número o preciona cancelar la función devuelve null
function pedirNumeros(cantidad) {
    let numeros = [];
    
    for (let i = 0; i < cantidad; i++) {
        let respuesta = parseInt(prompt(`Ingrese un numero (${i + 1} de ${cantidad}).`));
        if (isNaN(respuesta)) {
            throw new Error("No se ingresó un número valido o se precionó cancelar.");
        } else {
            numeros.push(respuesta);
        }
    }
    return numeros;
}

// pide una cantidad de caracteres, devuelve un array no vacio con los caracteres ingresados. Si el usuario en cualquier momento preciona cancelar o la tecla ESC devuelve null
function pedirCaracteres(cantidad) {
    let caracteres = [];
    
    for (let i = 0; i < cantidad; i++) {
        let caracter = prompt(`Ingrese un caracter (${i + 1} de ${cantidad}).`);
        if (caracter == null) {
            throw new Error("No se ingresaron caracteres o bien se presionó cancel.");
        } else {
            caracteres.push(caracter);
        }
    }
    return caracteres;
}

// recibe un array y suma todos los valores numericos salteandose una cantidad de elementos de acuerdo al parametro SALTO. Ignora valores no numericos. Devuelve null si no recibe un array con al menos 1 elemento. Devuelve 0 si recibe un array con contenido pero sin numeros.
function sumarArray(array) {
    let suma = 0;
    if (array == null || array == undefined || array.length==0) {
        throw new Error("El array no es válido.");
    } else {
        for(const elemento of array) {
            if (!isNaN(elemento)) {
                suma += elemento;
            }
        }
        return suma;
    }
}

/***************************************************************************************************** */
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

// recibe un array de numeros, calcula el promedio y lo devuelve
function calcularPromedio(numeros) {
    return sumarArray(numeros) / numeros.length;
}


/***************************************************************************************************** */
// Ejercicio 2 mostrar todos los múltiplos del último número en un array de 10.
function multiplosDelUltimo () {
    try {
        const numeros = pedirNumeros(CANTIDAD_NUMEROS);
        const ultimo = numeros.pop();
        const multiplos = multiplosDe(numeros, ultimo);
        
        if (multiplos.length > 0) {
            mostrar(`El último número de la lista es el ${ultimo}\nLos siguientes son todos los números de la lista que son múltiplos de ${ultimo}`);
            mostrarArray(multiplos);
        } else {
            avisar("Ningún número de la lista es múltiplo del último.");
        }
    } catch {
        avisar(CANCELADO);
    }

}

// devuelve un array multiplos que solo contiene aquellos elementos del array lista que son multiplos del numero indicado.
function multiplosDe(lista, numero) {

    const multiplos = [];
    if (lista.length == 0){
        throw new Error("Lista vacía.");
    } else if (isNaN(numero)) {
        throw new Error("El número provisto no es válido.");
    } else {
        for (const elemento of lista) {
            if (esMultiplo(elemento, numero)) {
                multiplos.push(elemento);
            }
        }
        return multiplos;
    }
}


/***************************************************************************************************** */
// ejercicio 3 pide 10 numeros, calcula el maximo, muestra ese maximo e indica cuantas veces fue ingresado
function frecuenciaDelMaximo () {
    
    try {
        let numeros = pedirNumeros(CANTIDAD_NUMEROS);
        let maximo = buscarMaximo(numeros);
        let cantidad = calcularFrecuencia(maximo, numeros);
    
        mostrar(`El máximo número de la lista es el ${maximo}, y fue ingresado ${cantidad} veces.`);
        return cantidad;
    } catch {
        avisar(CANCELADO);
        return -1;
    }
}


/***************************************************************************************************** */
// ejercicio 4 que pide 10 numeros y suma los que se hayan ingresado en los turnos pares
function programaSumarLugaresPares() {
    try {
        let numeros = pedirNumeros(CANTIDAD_NUMEROS);
        let suma = sumarLugaresPares(numeros);
        mostrar(suma);
    } catch {
        avisar(CANCELADO);
        return -1;
    }

}

// suma todos los elementos de lugares pares en un array ignorando datos no numericos.
function sumarLugaresPares(array) {
    let suma = 0;

    if (array == null || array == undefined || array.length==0) {
        return null;
    } else {
        for (let i = 1; i < array.length; i += 2) {
            if (!isNaN(array[i])) {
                suma += array[i];
            }
        }
        return suma;
    }
}


/***************************************************************************************************** */
// ejercicio 5 tomar un array de 9 caracteres e invertir el orden
function invertirArrayDeCaracteres() {
    try {
        let caracteres = pedirCaracteres(CANTIDAD_CARACTERES);
        invertirArray(caracteres);
        mostrar(caracteres);
    } catch {
        avisar(CANCELADO);
        return -1;
    }

}

function invertirArray(array){
    if (array == null || array == undefined) {
        return null;
    } else {
        let longitud = array.length;
        for (let i = 0; i < Math.floor(longitud / 2); i++) {
            let a = array[i];
            let b = array[longitud - 1 - i];
            array[i] = b;
            array[longitud - 1 - i] = a;
        }
    }
}


/***************************************************************************************************** */
// ejercicio 6 desplazar un array de 9 caracteres 1 lugar hacia la derecha y ponerl el ultimo al principio.
function rightShift() {
    try {
        let caracteres = pedirCaracteres(CANTIDAD_CARACTERES);
        let ultimo = caracteres.pop();
        caracteres.unshift(ultimo);
        mostrar(caracteres);
    } catch {
        avisar(CANCELADO);
        return -1;
    }
}


/***************************************************************************************************** */
// ejercicio 7 determinar si la palabra representada por los caracteres de un array conforman un palindromo
function programaEsPalindromo() {
    try {
        let caracteres = pedirCaracteres(CANTIDAD_CARACTERES);
        mostrar(esPalindromo(caracteres));
        return esPalindromo(caracteres);
    } catch {
        avisar(CANCELADO);
        return -1;
    }
}

function esPalindromo(array) {
    const LONGITUD = array.length;
    const ULTIMO = LONGITUD - 1;

    if (array == null || array == undefined || LONGITUD == 0) {
        return null;
    }

    let i = 0
    const CENTRO = Math.floor(LONGITUD / 2); 
    while (i < CENTRO && array[i] == array[ULTIMO - i]) {
        i++;
    }

    return i == CENTRO;
}


/***************************************************************************************************** */
// ejercicio 8 toma un array y muestra sus elementos sin repetir elementos
function mostrarSinRepetidos() {
    try {
        let caracteres = pedirCaracteres(CANTIDAD_CARACTERES);
        let caracteresUnicos = sinRepetidos(caracteres);
        mostrar("Los siguientes son los caracteres ingresados, sin repetir.");
        mostrarArray(caracteresUnicos);
    } catch {
        avisar(CANCELADO);
        return -1;
    }
}

function sinRepetidos(array) {
    let unicos = [];
    
    for (const elemento of array) {
        if (!unicos.includes(elemento)){
            unicos.push(elemento);
        }
    }

    return unicos;
}


/***************************************************************************************************** */
// ejercicio 9 lee del usuario 2 vectores de longitud indefinida. Ejecuta 4 operaciones de conjuntos, union, interseccion, diferencia y diferencia simetrica.
function programaOperacionesConConjuntos() {
    const INSTRUCCIONES = "Ingrese un conjunto de caracteres de a uno por vez.\nPresione Enter sin ingresar nada para pasar al sieguiente paso.";
    const MENSAJE_UNION = "La unión entre los dos vectores ingresados es:";
    const MENSAJE_INTERSECCION = "La intersección de los dos vectores es:";
    const MENSAJE_DIFERENCIA = "La diferencia del primer vector con el segundo es:";
    const MENSAJE_DIFERENCIA_SIMETRICA = "La diferencia simetrica entre ambos vectores es:";
    const CANTIDAD_VECTORES = 2;

    try {
        let vectores = [];
        vectores = pedirVectores(INSTRUCCIONES ,CANTIDAD_VECTORES, CADENA_VACIA);
        let union = unionDeVectores(vectores);
        let interseccion = interseccionDeVectores(vectores);
        let diferencia = diferenciaDeVectores(vectores);
        let diferenciaSimetrica = diferenciaSimetricaDeVectores(vectores);
        
        mostrar(`${MENSAJE_UNION}\n ${mostrarArray(union)}\n\n`);
        mostrar(`${MENSAJE_INTERSECCION}\n ${mostrarArray(interseccion)}\n\n`);
        mostrar(`${MENSAJE_DIFERENCIA}\n ${mostrarArray(diferencia)}\n\n`);
        mostrar(`${MENSAJE_DIFERENCIA_SIMETRICA}\n ${mostrarArray(diferenciaSimetrica)}\n\n`);
    } catch {
        avisar(CANCELADO);
        return -1;
    }
}

function pedirVectores(instrucciones, cantidad, caracterSeparador) {
    let vectorResultante = [];

    for (let contador = 0; contador < cantidad; contador++) {
        let vector = pedirVector(`${instrucciones}\nConjunto ${contador + 1} de ${cantidad}]`, caracterSeparador);
        vectorResultante.push(vector);
    }
    
    return vectorResultante;
}

function pedirVector(instrucciones, caracterSeprarador) {
    let vector = [];
    let respuesta = "";

    do {
        respuesta = prompt(instrucciones);
        vector.push(respuesta);
    } while(respuesta != caracterSeprarador)

    // La siguiente línea elimina el último elemento del vector. Cuando el usuario ingresa una cadena vacía para concluir el vector actual, esa cadena vacía se agrega como último elemento del vector andtes de salir del bucle, pero no debería formar parte del vector.
    respuesta.pop();
    return vector;
}

function unionDeVectores(vectores) {
    let vector = [];

    return vector
}

function interseccionDeVectores(vectores) {
    let vector = [];

    return vector
}

function diferenciaDeVectores(vectores) {
    let vector = [];

    return vector
}

function diferenciaSimetricaDeVectores(vectores) {
    let vector = [];

    return vector
}