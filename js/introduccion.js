function saludar() {
    let nombre = prompt("Escriba, por favor, su nombre.");

    if (nombre != "" && nombre != null) {
        alert(`Hola ${nombre}. Bienvenido a este ejercicio.`);
    } else {
        alert("No ingresó su nombre. Hasta luego.");
    }
}

function opuestoInverso() {
    let numero = parseInt(prompt("Escriba, por favor, un número."));

    if (!isNaN(numero)) {
        alert(`El opuesto de ${numero} es ${-numero}, y el inverso es ${1/numero}.`);
    } else {
        alert("No ingresó un numero. No puedo hacer cálculos sin un número.");
    }
}

function promedio() {
    const ERROR = "No ingresó un número, no se puede calcular el promedio.";

    let nota1 = parseInt(prompt("Escriba, por favor, la nota del primer trimestre (1-10)."));
    if (isNaN(nota1)) {
        alert(ERROR);
        return -1;
    }    

    let nota2 = parseInt(prompt("Escriba, por favor, la nota del segundo trimestre (1-10)."));
    if (isNaN(nota1)) {
        alert(ERROR);
        return -1;
    }

    let nota3 = parseInt(prompt("Escriba, por favor, la nota del tercer trimestre (1-10)."));
    if (isNaN(nota1)) {
        alert(ERROR);
        return -1;
    }    

    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`El romedio de las tres notas es ${promedio}`);
    return promedio;
}

function salario() {
    const ERROR = "Error. No ingresó un valor o presionó cancelar. Programa finalizado.";

    let salarioPorHora = parseInt(prompt("Escriba, por favor, el salario por hora en pesos."));
    if (isNaN(salarioPorHora)) {
        alert(ERROR);
        return -1;
    }

    let horasPorDia = parseInt(prompt("Escriba, por favor, la cantidad de horas diarias que trabaja."));
    if (isNaN(horasPorDia)) {
        alert(ERROR);
        return -1;
    }

    let jornadaCompleta = salarioPorHora * horasPorDia * 5;
    let jornadaMedia = salarioPorHora * horasPorDia / 2;
    let salarioSemanal = jornadaCompleta + jornadaMedia;

    alert(`El salario semanal del empleado será ${salarioSemanal}`);
    return salarioSemanal;
}

function intercambiar() {
    const ERROR = "No ingresó un numero. Programa terminado.";

    let numero1 = parseInt(prompt("Escriba, por favor, un número."));
    if (isNaN(numero1)) {
        alert(ERROR);
        return -1;
    }

    let numero2 = parseInt(prompt("Escriba, por favor, un segundo número."));
     if (isNaN(numero1)) {
        alert(ERROR);
        return -1;
    }
   
    alert(`Ud. ingresó los siguientes números A: ${numero1}; y B: ${numero2}`);
    
    let aux = numero1;
    numero1 = numero2;
    numero2 = aux;

    alert(`Ahora los intercambiamos. A: ${numero1}; B: ${numero2}.`);
}

function comision() {
    let precioPorUnidad = parseFloat(prompt(`Ingrese, por favor, el valor en a$r del articulo vendido.`));
    let cantidadVendida = parseInt(prompt(`Ingrese, por favor, la cantidad de ese artículo que fue vendido.`));
    const salarioFijo = 14000;
    const comisionPorVentas = 0.16;
    let comision = cantidadVendida * precioPorUnidad * comisionPorVentas;
    let salarioTotal = salarioFijo + comision;

    alert(`El salario neto de este emplelado es ${salarioTotal}.`);
}

function superficiePerimetro() {
    let ancho = parseInt(prompt(`Por favor, ingrese el ancho del terreno en metros.`));
    let largo = parseInt(prompt(`Ingrese, por favor, el largo del terreno en metros.`));
    let precioPorM2 = parseFloat(prompt(`Ingrese, por favor, el valor en pesos del metro cuadrado.`));
    let superficie = ancho * largo;
    let valorTerreno = precioPorM2 * superficie;
    let perimetro = (2 * ancho) + (2 * largo);
    let cantidadAlambre = 3 * perimetro;
    
    alert(`El terreno vale $${valorTerreno}. Se precisan ${cantidadAlambre}mts de alambre para cercarlo.`);
}

function aritmeticas () {
    let numero1 = parseInt(prompt("Ingrese, por favor, un número."));
    let numero2 = parseInt(prompt("Ingrese, por favor, otro número más."));

    let suma = numero1 + numero2;
    let diferencia = numero1 - numero2;
    let producto = numero1 * numero2;
    let cociente = numero1 / numero2;

    alert(`La suma de esos números es ${suma}; la diferencia es ${diferencia}; el producto es ${producto} y el cociente es ${cociente}.`);
}

function trigonometria() {
    let alfa = parseInt(prompt("Ingrese el valor en grados de un ángulo interno de un triángulo."));
    let beta = parseInt(prompt("Ingrese, por favor, el valor de otro ángulo interno."));
    let gama = 180 - (alfa + beta);

    alert(`El ángulo opuesto mide: ${gama}°.`);
}

function capital() {
    let inversor1 = prompt("Ingrese, por favor, el nombre del primer inversor.");
    let capital1 = parseInt(prompt ("Ingrese el capital aportado por ese inversor."));   
    let inversor2 = prompt("Ingrese, por favor, el nombre del segundo inversor.");
    let capital2 = parseInt(prompt ("Ingrese el capital aportado por ese inversor."));
    let inversor3 = prompt("Ingrese, por favor, el nombre del último inversor.");
    let capital3 = parseInt(prompt("Ingrese el capital aportado por ese inversor."));

    let capitalTotal = capital1 + capital2 + capital3;
    let aporte1 = (capital1 / capitalTotal) * 100;
    let aporte2 = (capital2 / capitalTotal) * 100;
    let aporte3 = (capital3 / capitalTotal) * 100;

    alert(`La sociedad se inicia con un capital de $${capitalTotal}. De ese total, ${inversor1} aportó el ${aporte1.toFixed(1)}%, ${inversor2} aportó el ${aporte2.toFixed(1)}% y ${inversor3} aportó el ${aporte3.toFixed(1)}%.`);
}