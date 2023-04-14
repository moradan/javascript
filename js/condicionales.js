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

    let mensaje;

    if (lado3 <= Math.abs(lado1 - lado2) || lado3 >= lado1 + lado2) {
        mensaje = "no conforman un triangulo válido.";
    } else {
        let tipo;
        if (lado1 == lado2 && lado2 == lado3) {
            tipo = "equilatero";
        } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            tipo = "escaleno";
        } else {
            tipo = "isósceles";
        }
        mensaje = `conforman un triangulo ${tipo}.`;        
    }

    alert(`Esos lados ${mensaje}`);
}

function meses() {
    let numero = parseInt(prompt("Por favor ingrese un numero del 1 al 12."));
    let mensaje = `El mes número ${numero} es el mes de `;

    switch (numero) {
        case 1:
            mensaje += "enero.";
            break;
        case 2:
            mensaje += "febrero.";
            break;
        case 3:
            mensaje += "marzo.";
            break;
        case 4:
            mensaje += "abril.";
            break;
        case 5:
            mensaje += "mayo.";
            break;
        case 6:
            mensaje += "junio.";
            break;
        case 7:
            mensaje += "julio.";
            break;
        case 8:
            mensaje += "agosto.";
            break;
        case 9:
            mensaje += "septiembre.";
            break;
        case 10:
            mensaje += "octubre.";
            break;
        case 11:
            mensaje += "noviembre.";
            break;
        case 12:
            mensaje += "diciembre.";
            break;
        default:
            mensaje = `El número ${numero} no corresponde a un mes del año.`;
    }

    alert(mensaje);
}

function romanos() {
    let romano = prompt("Por favor ingrese una letra que corresponda a un numero romano: ").toUpperCase();
    let enunciado = `La letra ${romano} `;
    let mensaje =  "corresponde al número romano ";

    switch (romano) {
        case "I":
            mensaje += "1";
            break;
        case "V":
            mensaje += "5";
            break;
        case "X":
            mensaje += "10";
            break;
        case "L":
            mensaje += "50";
            break;
        case "C":
            mensaje += "100";
            break;
        case "D":
            mensaje += "500";
            break;
        case "M":
            mensaje += "1000";
            break;
        default:
            mensaje = "no corresponde a un numero romano.";
    }

    alert(enunciado + mensaje);
}

function zodiaco() {
    let mes = prompt("Ingrese el mes de su cumpleaños").toLowerCase();
    let dia = parseInt(prompt("Ingrese el día de su cumpleaños"));
    let signo = "";
    let mensaje;
    
    const NO_ES_MES = `El mes ${mes} no existe.`
    switch (mes) {
        case "1":
            mes = "enero";
            break;
        case "2":
            mes = "febrero";
            break;
        case "3":
            mes = "marzo";
            break;
        case "4":
            mes = "abril";
            break;
        case "5":
            mes = "mayo";
            break;
        case "6":
            mes = "junio";
            break;
        case "7":
            mes = "julio";
            break;
        case "8":
            mes = "agosto";
            break;
        case "9":
            mes = "septiembre";
            break;
        case "10":
            mes = "octubre";
            break;
        case "11":
            mes = "noviembre";
            break;
        case "12":
            mes = "diciembre";
            break;
        default:
            mensaje = NO_ES_MES;        
    }
    
    const MENOS_QUE_UNO = "El día no puede ser ni 0 ni negativo."
    const DEMASIADOS_DIAS = `El mes de ${mes} no tiene tantos días.`;
    if (mensaje != NO_ES_MES) {
        if (dia < 1) {
            mensaje = MENOS_QUE_UNO;
        } else if (dia > 31) {
            mensaje = DEMASIADOS_DIAS;
        } else {
            switch (mes) {
                case "enero":
                    if (dia < 20) {
                        signo = "Capricornio";
                    } else {
                        signo = "Acuario"
                    }
                    break;
                case "febrero":
                    if (dia > 29) {
                        mensaje = DEMASIADOS_DIAS;
                    } else if (dia < 19) {
                        signo = "Acuario";
                    } else {
                        signo = "Piscis";
                    }
                    break;
                case "marzo":
                    if (dia < 21) {
                        signo = "Piscis";
                    } else {
                        signo = "Aries";
                
                    }
                    break;
                case "abril":
                    if (dia > 30) {
                        mensaje = DEMASIADOS_DIAS;
                    } else if (dia < 20) {
                        signo = "Aries";
                    } else {
                        signo = "Tauro";
                    }                
                    break;
                case "mayo":
                    if (dia < 21) {
                        signo = "Tauro";
                    } else {
                        signo = "Geminis";
                    }
                    break;
                case "junio":
                    if (dia > 30) {
                        mensaje = DEMASIADOS_DIAS;
                    } else if (dia < 21) {
                        signo = "Geminis";
                    } else {
                        signo = "Cáncer";
                    }
                    break;
                case "julio":
                    if (dia < 23) {
                        signo = "Cáncer";
                    } else {
                        signo = "Leo";
                    }
                    break;
                case "agosto":
                    if (dia < 23) {
                        signo = "Leo";
                    } else {
                        signo = "Virgo";
                    }
                    break;
                case "septiembre":
                case "setiembre":
                    if (dia > 30) {
                        mensaje = DEMASIADOS_DIAS;
                    } else if (dia < 23) {
                        signo = "Virgo";
                    } else {
                        signo = "Libra";
                    }
                    break;
                case "octubre":
                case "otubre":
                    if (dia < 23) {
                        signo = "Libra";
                    } else {
                        signo = "Escorpio";
                    }
                    break;
                case "noviembre":
                    if (dia > 30) {
                        mensaje = DEMASIADOS_DIAS;
                    } else if (dia < 22) {
                        signo = "Escorpio";
                    } else {
                        signo = "Sagitario";
                    }
                    break;
                case "diciembre":
                    break;
                default:
                    mensaje = `${mes} no es el nombre de un mes.`;
            }
        }    
    }     
       
    if (signo != "") { mensaje = `Ud. es de ${signo}`};
    alert(mensaje);
}
