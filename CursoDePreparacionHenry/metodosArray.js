/*Aqui se observan algunos metodos para agregar y borrar elementos de forma rapida en un arreglo existente */

//Creamos un nuevo array

var colores =['amarillo' , 'azul'];

// Agregar un elemento al final de la lista con el metodo PUSH:

colores.push ('rojo');

// Agregar un elemento al inicio de la lista con el metodo UNSHIFT:

colores.unshift ('verde');

// Borrar el ultimo elemento de la lista e imprimir en la terminal con POP:

colores.pop ();

// Borrar el primer elemento de la lista e imprimir en la terminal con SHIFT:

colores.shift();

//console.log (colores);

/* Ejemplo 2 */

var Pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali', 'Krystel']; // Creamos el array...

// y procedemos a buscar dentro de este arreglo si aparece el nombre del pintor que buscamos con INCLUDES:

var quePintor = Pintores.includes('Krystel'); // al usar includes como metodo, buscamos algo en especifico dentro del array
// console.log(quePintor);

// Ejemplo 3, para saber si todos los elementos dentro de un array cumplen con cierta condicion (every):

var numeros = [1,2,3,4,5,6];

var condicion = numeros.every((num) => {
    return num < 7;
});

console.log (condicion);