/*Creacion de OBJETOS:

Los objetos tienen una estrucura similar a los array, pero con un arerglo sobre arreglo, esto es una estructura de 
un array sobre arrays por asi decirlo; Ejemplos: */

console.log('Creaion del primer Objeto');
console.log('');
console.log('');

var deportes = {
    conBalon : ['Futbol', 'Basketball', 'Rugby'],
    sinBalon : ['Boxeo', 'Surf', 'Tae Kwon Do'],
};

console.log(deportes); // Este objeto contiene un arreglo de dos array, pero, podemos ingresar cualquier tipo de dato.

// Ejemplo 2: Se busca almacenar la informacion de una persona en un objeto y manipular los datos:

console.log('Ejemplo dos: Datos de una persona dentro de un objeto:');
console.log('');
console.log('');

var persona = {nombre:'Lucas', edad: 26, estudios: {esProgramador: true}};
console.log(persona);
// Hasta este punto el objeto ha almacenado los datos de la persona llamada lucas, pero vamos a modificar la información:

// Leer datos del array, para esto solo hace falta direccionar el datro que queremos observar, por ejemplo:

console.log (persona.nombre); // Nota: El direccionamiento se puede hacer mediante DOT (.) y KEY {}

// Cambio de nombre: Para hacer el cambio del nombre en este ejemplo lo unico que hay que hacer es
// direcionar el punto al que queremos acceder e igualar el valor de la nueva funcion,por ejemplo, cambiar el nombre:

persona.nombre = 'Henry Martin'; // Esto cambiara el nombre de la persona jaja
console.log (persona);

// Cambiar la edad de persona:

persona.edad = 33;
console.log (persona);

console.log('');
console.log('');
console.log('Ejemplo 3: Añadir un valor no existente a un objeto');
console.log('');
console.log('');
// Ahora vamos a crear un valor que no existe dentro de un objeto nuevo, ejemplo:

var autos = {}; // nuevo onjeto llamado autos
// Crear un dato dentro de autos como si fuera una modificacion de dato:
autos.marcas = ['Ford', 'Audi', 'Ferrari', 'Cadillac'];
autos.modelos = ['2020', '2021', '2022', '2023'];

console.log(autos);

// Eliminar datos de un ojeto es igual de sencillo, hagamos unas pruebas con delete:
delete autos.marcas[3];
console.log(autos);
delete autos.modelos[1];
console.log(autos);
delete autos.marcas;
console.log(autos);

// Una particularidad que tienen los objetos es que pueden almacenar funciones y luego acceder a ellas haciendo un llamado
// Ejemplo:

console.log('');
console.log('');
console.log('Ejemplo 4: manejo de funciones dentro de un objeto;');
console.log('');
console.log('');

var misFunciones = {
    saludar: function (){
        console.log('Hola');
    },
    despedir: function(){
        console.log('Adios');
    }
};

misFunciones.saludar();
misFunciones.despedir();