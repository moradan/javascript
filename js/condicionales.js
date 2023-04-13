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
    let mensajeInicio = `Entre ${numero1} y ${numero2}, `;
    let mensajeCierre = "";
    
    if (numero2 > numero1) {
        mensajeCierre = `$numero2 es el mayor.`;
    }
    else if (numero1 > numero2) {
        mensajeCierre = `$numero1 es el mayor.`;
    }
    else {
        mensajeCierre = "ambos son iguales.";
    }

    alert(mensajeInicio + mensajeCierre);
}