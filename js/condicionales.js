function esPar() {
    let numero = parseInt(prompt("Ingrese, por favor, un numero: "));
    const isEven = num => num % 2 === 0;
    let noEs = "no";

    if (isEven(numero)) {
        noEs = "";
    }
    
    const mensaje = `El número ${numero} ${noEs} es par.`;
    
    alert(mensaje);
}

function cupo() {
    let cantidadInscriptos = parseInt(prompt("Ingrese la cantidad de inscriptos: "));
    let cantidadAsientos = parseInt(prompt("Ingrese, por favor, la cantidad de asientos disponibles: "));
    let mensaje = "Los asientos alcanzan para todos los inscriptos";
    const faltante = cantidadInscriptos - cantidadAsientos;

    if (cantidadInscriptos > cantidadAsientos) {
        mensaje = `Faltan ${faltante} asientos para acomodar a todos los inscriptos.`;
    }

    alert(mensaje);
}

function mayorQue() {
    let numero1 = parseInt(prompt("Ingrese, por favor, un número: "));
    let numero2 = parseInt(prompt("Ingrese un número más: "));
    let mensajeInicio = `Entre el ${numero1} y el ${numero2}, `;
    let mensajeCierre = "";
    
    if (numero2 > numero1) {
        mensajeCierre = `el ${numero2} es el mayor.`;
    }
    else if (numero1 > numero2) {
        mensajeCierre = `el ${numero1} es el mayor.`;
    }
    else {
        mensajeCierre = "ambos son iguales.";
    }

    alert(mensajeInicio + mensajeCierre);
}

function maximo() {
    let numero1 = parseInt(prompt("Ingrese, por favor, un número: "));
    let numero2 = parseInt(prompt("Ingrese un número más: "));
    let numero3 = parseInt(prompt("Ingrese un último número: "));
    let enunciado = `De esta lista: ${numero1}, ${numero2}, ${numero3};`;
    let respuesta = "";
    let intro = " el mayor es el ";
    
    if ((numero1 == numero2) && (numero1 == numero3)) {
        respuesta = " ningún número es mayor a los demás."
    } else {
        if (numero1 > numero2) {
            if (numero1 > numero3) {
                respuesta = intro + numero1;
            } 
            else if (numero3 >= numero1) {
                respuesta = intro + numero3;
            }
        }
        else if (numero2 > numero1) {
            if (numero2 > numero3) {
                respuesta = intro + numero2;
            } 
            else if (numero3 >= numero2) {
                respuesta = intro + numero3;
            }
        } 
        else if (numero1 > numero3) {
            respuesta = intro + numero1;
        }
        else if (numero3 >= numero1) {
            respuesta = intro + numero3;
        }
    }

    alert(enunciado + respuesta);
}
