function esPar() {
    const ERROR = "No ingresó un número. No se puede evaluar paridad.";

    let numero = parseInt(prompt("Ingrese, por favor, un numero."));
    if (isNaN(numero)) {
        alert(ERROR);
        return -1;
    }
    
    let esONo = "no es";
    if (numero % 2 == 0) {
        esONo = "es";
    }
    const mensaje = `El número ${numero} ${esONo} par.`;
    
    alert(mensaje);
}

function cupo() {
    const ERROR = "No ingresó un número válido. Terminando el programa.";

    let cantidadInscriptos = parseInt(prompt("Ingrese la cantidad de inscriptos: "));
    if (isNaN(cantidadInscriptos)) {
        alert(ERROR);
        return -1;
    }

    let cantidadAsientos = parseInt(prompt("Ingrese, por favor, la cantidad de asientos disponibles: "));
    if (isNaN(cantidadAsientos)) {
        alert(ERROR);
        return -1;
    }

    let mensaje = "Los asientos alcanzan para todos los inscriptos";
    const faltante = cantidadInscriptos - cantidadAsientos;
    if (faltante > 0) {
        mensaje = `Faltan ${faltante} asientos para acomodar a todos los inscriptos.`;
    }

    alert(mensaje);
}

function mayorQue() {
    const ERROR = "No ingresó un número válido. Programa terminado.";

    let numero1 = parseInt(prompt("Ingrese, por favor, un número."));
    if(isNaN(numero1)){
        alert(ERROR);
        return -1;
    }

    let numero2 = parseInt(prompt("Ingrese un número más."));
    if(isNaN(numero2)){
        alert(ERROR);
        return -1;
    }
    
    const enunciado = `Entre el ${numero1} y el ${numero2}, `;
    let conclusion = "";
    
    if (numero2 > numero1) {
        conclusion = `el ${numero2} es el mayor.`;
    }
    else if (numero1 > numero2) {
        conclusion = `el ${numero1} es el mayor.`;
    }
    else {
        conclusion = "ambos son iguales.";
    }

    alert(enunciado + conclusion);
}

function maximo() {
    const ERROR = "No ingresó un número válido. Programa terminado.";

    let numero1 = parseInt(prompt("Ingrese, por favor, un número: "));
    if(isNaN(numero1)) {
        alert(ERROR);
        return -1;
    }

    let numero2 = parseInt(prompt("Ingrese un número más: "));
    if(isNaN(numero2)) {
        alert(ERROR);
        return -1;
    }
   
    let numero3 = parseInt(prompt("Ingrese un último número: "));
    if(isNaN(numero3)) {
        alert(ERROR);
        return -1;
    }
   
    const enunciado = `De esta lista: ${numero1}, ${numero2}, ${numero3};`;
    let conclusion = "";
    let intro = " el mayor es el ";
    
    if ((numero1 == numero2) && (numero1 == numero3)) {
        conclusion = " ningún número es mayor a los demás."
    } else {
        if (numero1 > numero2) {
            if (numero1 > numero3) {
                conclusion = intro + numero1;
            } 
            else if (numero3 >= numero1) {
                conclusion = intro + numero3;
            }
        }
        else if (numero2 > numero1) {
            if (numero2 > numero3) {
                conclusion = intro + numero2;
            } 
            else if (numero3 >= numero2) {
                conclusion = intro + numero3;
            }
        } 
        else if (numero1 > numero3) {
            conclusion = intro + numero1;
        }
        else if (numero3 >= numero1) {
            conclusion = intro + numero3;
        }
    }

    alert(enunciado + conclusion);
}

function jubilatorio () {
    const CANCELAR = "Eligió cancelar el programa."
    const EDAD_M = 65;
    const EDAD_F = 60;
    const EDAD_MIN = 1;
    const EDAD_MAX = 120;
    const EDAD_INVALIDA = "La edad no es válida.";
    const GENERO_INVALIDO = "El genero no es válido."
    
    let edad = parseInt(prompt(`Por favor, ingrese su edad (entre ${EDAD_MIN} y ${EDAD_MAX} años).`));
    if (isNaN(edad)) {
        alert(CANCELAR);
        return -1;
    } else if (edad < EDAD_MIN || edad > EDAD_MAX) {
        alert(EDAD_INVALIDA);
        return -1;
    } else {
        let respuesta = prompt("Indique, por favor, su genero (m - masculino; f - femenino).");
        if (respuesta == null) {
            alert(CANCELAR);
            return -1;
        }
        let genero = respuesta.toUpperCase();
        let califica = "no";
        if (genero!="M" && genero!="F") {
            alert(GENERO_INVALIDO);
            return -1;
        }
        else if (edad >= EDAD_M || (edad >= EDAD_F && genero == "F")) {
            califica = "";
        }
        let mensaje = `Ud. ${califica} esta en edad para jubilarse.`
        alert(mensaje);
    }
}

function aporte() {
    const ERROR = "No ingresó un dato válido. Programa terminado.";
    
    let edad = parseInt(prompt("Por favor, indique su edad."));
    if (isNaN(edad)) {
        alert(ERROR);
        return -1;
    }
    
    let sueldo = parseInt(prompt("Cual es su sueldo en a$r."));
    if (isNaN(sueldo)) {
        alert(ERROR);
        return -1;
    }

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
    const ERROR = "No ingresó un número válido. Programa terminado.";

    let numero1 = parseInt(prompt("Ingrese un número."));
    if (isNaN(numero1)){
        alert(ERROR);
        return -1;
    }
    let numero2 = parseInt(prompt("Ingrese un segundo número."));
    if (isNaN(numero2)){
        alert(ERROR);
        return -1;
    }

    let numero3 = parseInt(prompt("Ingrese un último número."));
    if (isNaN(numero3)){
        alert(ERROR);
        return -1;
    }

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
        if (numero1 < numero3) {
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
    const ERROR = "No ingresó un número válido. Programa terminado.";
    
    let numero1 = parseInt(prompt("Por favor, ingrese un número."));
    if (isNaN(numero1)){
        alert(ERROR);
        return -1;
    }
    let numero2 = parseInt(prompt("Ingrese, por favor, un segundo número."));
    if (isNaN(numero2)){
        alert(ERROR);
        return -1;
    }

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
    const ERROR = "No ingresó suficientes datos. Programa terminado.";

    let lado1 = parseInt(prompt("Ingrese la longitud del primer lado del triangulo."));
    if (isNaN(lado1)) {
        alert(ERROR);
        return -1;
    }

    let lado2 = parseInt(prompt("Ingrese la longitud del segundo lado."));
    if (isNaN(numero2)){
        alert(ERROR);
        return -1;
    }

    let lado3 = parseInt(prompt("Ingrese la longitud del último lado."));
    if (isNaN(numero3)){
        alert(ERROR);
        return -1;
    }

    let mensaje;

    if (lado1 <= lado2 + lado2 || lado3 >= lado1 + lado2) {
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
    const ERROR = "No ingresó un número válido.";

    let numero = parseInt(prompt("Por favor ingrese un numero del 1 al 12."));
    if (isNaN(numero) || numero < 1 || numero > 12) {
        alert(ERROR);
        return -1;
    }

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
    }

    alert(mensaje);
}

function romanos() {
    const ERROR = "Decidio cancelar el programa.";

    let respuesta = prompt("Por favor ingrese una letra que corresponda a un numero romano: ");
    if (respuesta == null){
        alert(ERROR);
        return -1;
    }

    let romano = respuesta.toUpperCase();
    let enunciado = `La letra ${romano} corresponde al número romano`;
    let conclusion =  "";

    switch (romano) {
        case "I":
            conclusion = "1";
            break;
        case "V":
            conclusion = "5";
            break;
        case "X":
            conclusion = "10";
            break;
        case "L":
            conclusion = "50";
            break;
        case "C":
            conclusion = "100";
            break;
        case "D":
            conclusion = "500";
            break;
        case "M":
            conclusion = "1000";
            break;
        default:
            conclusion = "no corresponde a un numero romano.";
    }

    alert(`${enunciado} ${conclusion}.`);
}

function zodiaco() {
    const ERROR = "No ingresó un dato valido. Programa terminado.";
    
    let respuesta = prompt("Ingrese el mes de su cumpleaños.");
    let mes;
    if (respuesta == null || respuesta == "") {
        alert(ERROR);
        return -1;
    } else if (isNaN(respuesta)) {
        mes = respuesta;
    }
 
    let dia = parseInt(prompt("Ingrese el día de su cumpleaños."));
    if (isNaN(dia)) {
        alert(ERROR);
        return -1;
    }

    let signo = "";
    let mensaje = "";
    
    const NO_ES_MES = `El mes ${mes} no existe.`
    if (!isNaN(mes)) {
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
       
    if (signo != "") { mensaje = `Ud. es de ${signo}.`};
    alert(mensaje);
}
