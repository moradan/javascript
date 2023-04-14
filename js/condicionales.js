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

function jubilatorio () {
    const EDAD_M = 65;
    const EDAD_F = 60;
    const EDAD_MIN = 1;
    const EDAD_MAX = 120;
    const EDAD_INVALIDA = "La edad no es válida.";
    const GENERO_INVALIDO = "El genero no es válido."
    let califica = "no";
    
    let edad = parseInt(prompt(`Por favor, ingrese su edad (entre ${EDAD_MIN} y ${EDAD_MAX} años): `));
    
    if (edad < EDAD_MIN || edad > EDAD_M) {
        alert(EDAD_INVALIDA);
    }
    else {
        let genero = prompt("Indique, por favor, su genero (m - masculino; f - femenino): ").toUpperCase();
        if (genero!="M" && genero!="F") {
            alert(GENERO_INVALIDO);
        }
        else if (edad >= EDAD_M || (edad >= EDAD_F && genero == "F")) {
            califica = "";
        }
        let mensaje = `Ud. ${califica} esta en edad para jubilarse.`
        alert(mensaje);
    }
}

function aporte() {
    let edad = parseInt(prompt("Por favor, indique su edad: "));
    let sueldo = parseInt(prompt("Cual es su sueldo en a$r: "));
    
    const CATEGORIA1 = 20000;
    const CATEGORIA2 = 30000;
    const CATEGORIA3 = 40000;

    const APORTE1 = 0.007;
    const APORTE2 = 0.014;
    const APORTE3 = 0.021;
    const APORTE4 = 0.028;

    const EDAD_QUIEBRE = 30;
    const ADICIONAL_POR_EDAD = 1.3;

    let aporte = 0;

    if (sueldo < CATEGORIA1) {
        aporte = sueldo * APORTE1;
    } else if (sueldo < CATEGORIA2) {
        aporte = sueldo * APORTE2;
    } else if (sueldo < CATEGORIA3) {
        aporte = sueldo * APORTE3;
    } else {
        aporte = sueldo * APORTE4;
    }

    if (edad <= EDAD_QUIEBRE) {
        aporte = aporte * ADICIONAL_POR_EDAD;
    }

    alert(`El aporte del empleado es de $${aporte}.`);
}

function ordenar() {
    let numero1 = parseInt(prompt("Ingrese un número: "));
    let numero2 = parseInt(prompt("Ingrese un segundo número: "));
    let numero3 = parseInt(prompt("Ingrese un último número: "));

    let orden1;
    let orden2;
    let orden3;

    if (numero1 <= numero2 && numero1 <= numero3) {
        orden1 = numero1;
        if (numero2 < numero3) {
            orden2 = numero2;
            orden3 = numero3;
        } else {
            orden2 = numero3;
            orden3 = numero2;
        }
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        orden1 = numero2;
        if (numero1 < numero2) {
            orden2 = numero1;
            orden3 = numero3;
        } else {
            orden2 = numero3;
            orden3 = numero1;
        }
    } else {
        orden1 = numero3;
        if (numero1 < numero2) {
            orden2 = numero1;
            orden3 = numero2;
        } else {
            orden2 = numero2;
            orden3 = numero1;
        }
    }

    alert(`Los numeros de menor a mayor son: ${orden1}, ${orden2}, ${orden3}.`);
}

function divisible () {
    let numero1 = parseInt(prompt("Por favor, ingrese un número: "));
    let numero2 = parseInt(prompt("Ingrese, por favor, un segundo número: "));

    let orden1;
    let orden2;

    let esDivisible = "no";

    if (numero1 <= numero2) {
        orden1 = numero1;
        orden2 = numero2;
    } else {
        orden1 = numero2;
        orden2 = numero1;
    } 

    if( orden2 % orden1 == 0) {
        esDivisible = "";
    }

    alert(`El número ${orden2} ${esDivisible} es divisible por ${orden1}.`);
}

function trigonometria() {
    let lado1 = parseInt(prompt("Ingrese la longitud del primer lado del triangulo: "));
    let lado2 = parseInt(prompt("Ingrese la longitud del segundo lado: "));
    let lado3 = parseInt(prompt("Ingrese la longitud del último lado: "));

    let esValido;

    if (lado3 < Math.abs(lado1 - lado2) || lado3 > lado1 + lado2) {
        esValido = "no";
    } else {
        esValido = "";
    }

    let tipo;
    if (lado1 == lado2 && lado2 == lado3) {
        tipo = "equilatero";
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        tipo = "escaleno";
    } else {
        tipo = "isósceles";
    }

    alert(`Esos lados ${esValido} forman un triangulo valido, el cual es ${tipo}.`)
}
