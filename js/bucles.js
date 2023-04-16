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
        alert(mensaje);
    }

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

    if (cantidad_jugadores == 0) {
        alert(`Cuando tengas jugadores volve a ejecutar este programa.`);
    } else {
        for (let i = 0; i < cantidad_jugadores; i++) {
            estatura_acumulado += parseFloat(prompt(`Ingrese la estatura en metros del jugador #${i + 1}:`));
        }
        alert(`La estatura promedio del equipo es de ${(estatura_acumulado / cantidad_jugadores).toFixed(2)}mts.`);
    }

}

function busqueda() {
    let cantidad = parseInt(prompt("Ingrese la cantidad numeros para listar."));
    let lista = [];
    let ordenMayor = 0;

    if (cantidad == 0) {
        alert("No se puede hacer una lista con 0 elementos.");
    } else {
        for (let i = 0; i < cantidad; i++) {
            lista[i] = parseInt(prompt("Ingrese un numero entero."));        
        }

        for (let i = 0; i < cantidad; i++) {
            if (lista[ordenMayor] < lista[i]) {
                ordenMayor = i;
            }
        }

        alert(`El mayor número de la lista es el ${lista[ordenMayor]} y aparece por primera vez en el lugar ${ordenMayor} de la lista.`);
    }
}

function factorial() {
    let numero = parseInt(prompt("Por favor ingrese un número natural."));
    let factorial = 1;

    if (numero < 0) {
        alert("El numero debe ser natural.");
    } else {
        if (numero != 0 && numero != 1) {
            for (let n = 2; n <= numero; n++) {
                factorial *= n;
            }
        } 
        alert(`El factorial de ${numero} es ${factorial}.`);
    }
}

function validar() {
    const VALIDO = "válida";
    const INVALIDO = "inválida";
    let nota;
    let validez = INVALIDO;

    while(validez == INVALIDO) {
        nota = parseInt(prompt("Ingrese una nota del 0 al 10:"));

        if (nota < 0 || nota > 10) {
            validez = INVALIDO;
        } else {
            validez = VALIDO;
        }
        alert(`La nota ingresada es ${validez}.`)
    }
}

function validarExcepciones() {
    const VALIDO = "La nota ingresada es válida."
    const CERO = "Recuerde que la nota 0 esta reservada para ausentes."
    const UNO_TRES = "Recuerde que 1 y 3 se asignan en casos especiales.";
    const FUERA_RANGO = "La nota tiene que estar entre 1 y 10.";
    const INVALIDO = -1;
    let nota;
    let mensaje = INVALIDO;

    while(mensaje != VALIDO) {
        nota = parseInt(prompt("Ingrese una nota valida del 1 al 10:"));

        if (nota < 0 || nota > 10) {
            mensaje = FUERA_RANGO;
        } else if (nota == 0) {
            mensaje = CERO;
        } else if (nota == 1 || nota == 3) {
            mensaje = UNO_TRES;
        } else {
            mensaje = VALIDO;
        }
        alert(mensaje);
    }
}

function validarSiNo() {
    let CONTINUAR = "continuar";
    let CANCELAR = "cancelar";
    let respuesta;
    let mensaje;
    let validez = false;
    
    do {
        respuesta = prompt("¿Desea continuar? [S/N]").toUpperCase();
    
        if (respuesta == "S") {
            mensaje = CONTINUAR;
            validez = true;
        } else if (respuesta == "N") {
            mensaje = CANCELAR;
            validez = true;
        }
    } while(!validez);
    
    alert(`Ud. decidió ${mensaje}.`);
}

function maximoMinimo () {
    const CIERRE = 0;
    let maximo = 0;
    let minimo = 0;
    let numero = 0;

    do {
        numero = parseInt(prompt("Ingrese un número (0 para terminar):"));
        
        if (numero > maximo) {
            maximo = numero;
        }
        if (numero < minimo) {
            minimo = numero;
        }
    } while (numero != CIERRE)
    alert(`El máximo número fue el ${maximo}, y el mínimo fue el ${minimo}.`)
}

function masJoven () {
    const CIERRE  = "*";

    let jovenNombre = "";
    let jovenEdad = 120;
    let nombre = "";
    let edad = 0;

    let continuar = true;

    do {
        
        nombre = prompt("Ingrese el nombre de una persona:");
        
        if (nombre == "*") {
            continuar = false;
        } else {
            edad = parseInt(prompt("Ingrese su edad:"));

            if (edad < jovenEdad) {
                jovenEdad = edad;
                jovenNombre = nombre;
            }
        }
    } while (continuar);
    alert(`El más joven es ${jovenNombre} con ${jovenEdad} años de edad.`);
}

function promedioAcumulado() {
    const QUIEBRE = 20;
    const PROMPT = "Ingrese un número.";
    const ENUNCIADO_PROMEDIO = "El promedio hasta ahora es";
    
    let mensaje = PROMPT;
    let total = 0;
    let cantidad = 0;
    let promedio = 0;
    
    do {
        total += parseInt(prompt(mensaje));
        cantidad++;
        promedio = total / cantidad;
        mensaje = ENUNCIADO_PROMEDIO + ` ${promedio.toFixed(2)}. ` + PROMPT;
    } while(promedio < QUIEBRE);

    alert(`El promedio ya alcanzó ${QUIEBRE} o más, la cantidad de números ingresados fue ${cantidad}.`);
}

function porcentajePares () {
    let continuar = true;
    let respuesta = "";
    let numero = 0;
    let cantidad_total = 0;
    let cantidad_par = 0;

    do {
        numero = parseInt(prompt("Ingrese un número entero."));
        cantidad_total++;

        do {
            respuesta = prompt("¿Desea continuar? [S/N]").toUpperCase();
        } while (respuesta != "S" && respuesta != "N");

        if (respuesta == "N") {
            continuar = false;
        }

        if (numero % 2 == 0) {
            cantidad_par++;
        }
    } while (continuar);

    let porcentaje = ((cantidad_par / cantidad_total) * 100).toFixed(2);
    alert(`De los números ingresados el ${porcentaje}% son pares.`);
}

function laCuenta() {
    let continuar = true;
    let respuesta = "";
    let monto_total = 0;
    let precio_unitario;
    let unidades;

    do {
        precio_unitario = 0;
        unidades = 0;
        unidades = parseInt(prompt("Ingrese la cantidad de unidades vendidas."));
        precio_unitario = parseInt(prompt("Ingrese el precio unitario."));
        monto_total += precio_unitario * unidades;

        do {
            respuesta = prompt("¿Desea ingresar otro artículo? [S/N]").toUpperCase();
        } while(respuesta != "S" && respuesta != "N");

        if (respuesta == "N") {
            continuar = false;
        }

    } while (continuar);

    alert(`El total de la cuenta es: $${monto_total}.`);
}

function sumaSueldos() {
    let sueldoTotal = 0;

    for (let i = 1; i <= 12; i++) {
        sueldo = parseFloat(prompt("Ingrese el sueldo del mes #{i} (use un valor negativo para el sueldo del mes actual).")).toFixed(2);
        if (sueldo < 0) {
            break;
        } else {
            sueldoTotal += sueldo;
        }
    }

    alert(`El sueldo percibido hasta la fecha es de $${sueldoTotal}.`);
}

