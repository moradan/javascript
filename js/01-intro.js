let anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let fecha = new Date();
let anioActual = fecha.getFullYear;
let edad = anioActual - anioNacimiento;

console.log(`Su edad es de ${edad-1} ó ${edad}.`);