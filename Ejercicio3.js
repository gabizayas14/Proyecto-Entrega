//Ejercicio 3. Declara un objeto persona con las propiedades más habituales, usando todos los tipos de datos incluidos un array y otro objeto.
// Muestra el contenido usando console.log y console.table

let persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: true,
    direccion: {
        calle: "Calle Falsa",
        numero: 123
    },
    hobbies: ["leer", "programar", "correr"]
};

console.log("Persona:", persona);
console.table(persona);