//Ejercicio 1. Declara variables de varios tipos.
//Muestra el contenido en la consola junto con el tipo de dato.
//En este ejercicio utiliza el console.log, console.error, console.info y el console.debug

let nombre = "Juan"; // string
let edad = 30; // number
let esEstudiante = true; // boolean
let direccion = { calle: "Calle Falsa", numero: 123 }; // object
let hobbies = ["leer", "programar", "correr"]; // array
let fechaNacimiento = new Date("1993-05-15"); // date
let indefinido; // undefined
let nulo = null; // null

console.log("Nombre:", nombre, "Tipo:", typeof nombre);
console.log("Edad:", edad, "Tipo:", typeof edad);
console.log("Es estudiante:", esEstudiante, "Tipo:", typeof esEstudiante);
console.log("Dirección:", direccion, "Tipo:", typeof direccion);
console.log("Hobbies:", hobbies, "Tipo:", typeof hobbies);
console.log("Fecha de nacimiento:", fechaNacimiento, "Tipo:", typeof fechaNacimiento);
console.log("Indefinido:", indefinido, "Tipo:", typeof indefinido);
console.log("Nulo:", nulo, "Tipo:", typeof nulo);

console.error("Este es un mensaje de error");
console.info("Este es un mensaje informativo");
console.debug("Este es un mensaje de depuración");
