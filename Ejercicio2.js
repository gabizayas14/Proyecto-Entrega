//Ejercicio 2. Declara un array de 100 números. Rellena el array con valores al azar.
//Muestra el contenido console.table. Realiza un filtrado de datos.
//Por ejemplo mostrando los valores de un determinado rango

let numeros = [];

// Rellenar el array con valores al azar entre 1 y 100
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

// Mostrar el contenido del array en una tabla
console.table(numeros);

// Filtrar los valores que estén en un rango determinado, por ejemplo entre 20 y 50
let rangoFiltrado = numeros.filter(num => num >= 20 && num <= 50);

// Mostrar los valores filtrados
console.log("Valores entre 20 y 50:");
console.table(rangoFiltrado);
