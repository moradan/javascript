function saludar() {
    let nombre = prompt("Escriba, por favor, su nombre: ");
    alert(`Hola ${nombre}. Bienvenido a este ejercicio.`);
}

function opuestoInverso() {
    let numero = prompt("Escriba, por favor, un número: ");

    alert(`El opuesto de ${numero} es ${-numero}, y el inverso es ${1/numero}.`);
}

function promedio() {
    let nota1 = parseInt(prompt("Escriba, por favor, la nota del primer trimestre (1-10): "));
    let nota2 = parseInt(prompt("Escriba, por favor, la nota del segundo trimestre (1-10): "));
    let nota3 = parseInt(prompt("Escriba, por favor, la nota del tercer trimestre (1-10): "));
    let promedio = (nota1 + nota2 + nota3)/3;

    alert(`El promedio del alumno es: ${promedio.toFixed(1)}.`);
}

function salario() {
    let salarioPorHora = parseInt(prompt("Escriba, por favor, el salario por hora en pesos: "));
    let horasPorDia = parseInt(prompt("Escriba, por favor, la cantidad de horas diarias que trabaja: "));
    let jornadaCompleta = salarioPorHora*horasPorDia*5;
    let jornadaMedia = salarioPorHora*horasPorDia/2;
    let salarioSemanal = jornadaCompleta + jornadaMedia;

    alert(`El salario semanal del empleado será: ${salarioSemanal}`);
}

function intercambiar() {
    let numero1 = parseInt(prompt("Escriba, por favor, un número: "));
    let numero2 = parseInt(prompt("Escriba, por favor, un segundo número: "));
    
    alert(`Ud. ingresó los siguientes números A: ${numero1}; y B: ${numero2}`);
    
    let aux = numero1;
    numero1 = numero2;
    numero2 = aux;

    alert(`Ahora los intercambiamos. A: ${numero1}; B: ${numero2}.`);
}

function comision() {
    let precioPorUnidad = parseInt(prompt(`Ingrese, por favor, el valor en a$r del articulo vendido: `));
    let cantidadVendida = parseInt(prompt(`Ingrese, por favor, la cantidad de ese artículo que fue vendido: `));
    const salarioFijo = 14000;
    const comisionPorVentas = 0.16;
    let comision = cantidadVendida * precioPorUnidad * comisionPorVentas;
    let salarioTotal = salarioFijo + comision;

    alert(`El salario neto de este emplelado es: ${salarioTotal}.`);
}

function superficiePerimetro() {
    let ancho = parseInt(prompt(`Por favor, ingrese el ancho del terreno en metros: `));
    let largo = parseInt(prompt(`Ingrese, por favor, el largo del terreno en metros: `));
    let precioPorM2 = parseInt(prompt(`Ingrese, por favor, el valor en pesos del metro cuadrado: `));
    let superficie = ancho * largo;
    let valorTerreno = precioPorM2 * superficie;
    let perimetro = (2 * ancho) + (2 * largo);
    let cantidadAlambre = 3 * perimetro;
    
    alert(`El terreno vale $${valorTerreno}. Se precisan ${cantidadAlambre}mts de alambre para cercarlo.`);
}

function aritmeticas () {
    let numero1 = parseInt(prompt("Ingrese, por favor, un número: "));
    let numero2 = parseInt(prompt("Ingrese, por favor, otro número más: "));

    let suma = numero1 + numero2;
    let diferencia = numero1 - numero2;
    let producto = numero1 * numero2;
    let cociente = numero1 / numero2;

    alert(`La suma de esos números es ${suma}; la diferencia es ${diferencia}; el producto es ${producto} y el cociente es ${cociente}.`);
}

function trigonometria() {
    let alfa = parseInt(prompt("Ingrese el valor en grados de un ángulo interno de un triángulo: "));
    let beta = parseInt(prompt("Ingrese, por favor, el valor de otro ángulo interno: "));
    let gama = 180 - (alfa + beta);

    alert(`El ángulo opuesto mide: ${gama}°.`);
}

function capital() {
    
}