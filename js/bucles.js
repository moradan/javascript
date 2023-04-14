function unoAlCien() {
    let mensaje1 = "Estos son los números del 1 al 100:\n";
    let mensaje2 = "Y estos son los mismos numeros en el orden opuesto:\n";

    for (let contador = 1; contador < 100; contador++) {
        mensaje1 += ` ${contador},`;
    }
    mensaje1 += " 100.";

    for (let contador = 100; contador > 1; contador--) {
        mensaje2 += ` ${contador},`;
    }
    mensaje2 += " 1.";

    alert(mensaje1 + "\n\n" + mensaje2);
}

function secuencia() {
    let numero1 = parseInt(prompt("Ingrese un número:"));
    let numero2 = parseInt(prompt("Ingrese otro número:"));

    let orden1, orden2;

    if (numero1 < numero2) {
        orden1 = numero1;
        orden2 = numero2;
    } else {
        orden1 = numero2;
        orden2 = numero1;
    }

    let mensaje1 = "Esta es la secuencia de numeros inclusiva:\n";
    for (let contador = orden1; contador < orden2; contador++) {
        mensaje1 += ` ${contador},`;
    }
    mensaje1 += ` ${orden2}.`;

    let mensaje2 = "Y esta es la secuencia exclusiva:\n";
    for (let contador = orden1 + 1; contador < orden2 - 1; contador++) {
        mensaje2 += ` ${contador},`;
    }
    mensaje2 += ` ${orden2 - 1}.`;

    alert(mensaje1 + "\n\n" + mensaje2);
}

function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese un número entre el 1 y el 10"));
    let mensaje = `La tabla del ${numero}:\n--------------------------\n`;

    for (let i = 1; i <= 10; i++) {
        mensaje += `${numero} x ${i} = ${numero*i}\n`;
    }

    alert(mensaje);
}

function fizzBuzz() {
    let numero = parseInt(prompt("Ingrese un número natural (no 0)."));
    let mensaje = `Estos son los primeros ${numero} multiplos de 3 excluyendo los multiplos de 5.\n`;

    if (numero < 1) {
        alert("Los números naturales no pueden ser 0 o negativos.")
    } else {
        for (let i = 1, j = 1; i <= numero; j++) {
            multiplo = j * 3;
            if (multiplo % 5 != 0) {
                mensaje += `${multiplo}\n`;
                i++;
            }
        }
    }

    alert(mensaje);
}

function edadMultiplos() {
    let edades = [];

    for (let i = 1; i <= 5; i++) {
        edades[i] = parseInt(prompt(`${i}. Ingrese una edad`));
    }

    let cantidad = 0;
    for (let i = 1; i <= 5; i++) {
        if (edades[i] > 18 && edades[i] % 2 != 0) {
            cantidad++;
        }
    }

    alert(`De esas 5 edades, ${cantidad} fueron impares mayores de 18 años.`);
}

function ventasAcumuladas() {
    let cantidad_ventas = parseInt(prompt("Ingrese la cantidad de ventas que hizo el vendedor."));
    let ventas_acumulado = 0;

    for (let i = 0; i < cantidad_ventas; i++) {
        ventas_acumulado += parseFloat(prompt(`Ingrese el valor de la venta #${i}:`));
    }

    alert(`El total de ventas del vendedor es de $${ventas_acumulado.toFixed(2)}`);
}

function estaturaPromedio() {
    let cantidad_jugadores = parseInt(prompt("Ingrese la cantidad de jugadores en el equipo."));
    let estatura_acumulado = 0;

    for (let i = 0; i < cantidad_jugadores; i++) {
        estatura_acumulado += parseFloat(prompt(`Ingrese la estatura en metros del jugador #${i}:`));
    }

    alert(`La estatura promedio del equipo es de ${(estatura_acumulado / cantidad_jugadores).toFixed(2)}mts.`);
}

function busqueda() {
    let cantidad = parseInt(prompt("Ingrese la cantidad numeros para listar."));
    let lista = [];

    for (let i = 0; i < cantidad_jugadores; i++) {
        estatura_acumulado += parseFloat(prompt(`Ingrese la estatura en metros del jugador #${i}:`));
    }

    alert(`La estatura promedio del equipo es de ${(estatura_acumulado / cantidad_jugadores).toFixed(2)}mts.`);
}

