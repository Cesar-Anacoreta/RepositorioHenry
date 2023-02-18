/*Ahora veremos un par de funciones aplicables a objetos de modo que podamos trabajar de forma mas sencilla con los objetos.

La primer funcion es la llamada Has Own Property, que como indica, nos dirá si es que en el objeto que estamos analizando existe
la prpiedad que le pidamos a esta fucnion que busque, por ejemplo:*/

console.log('Ejemplo HasOwnProperty, libro');
console.log('');

var libro = {autor: 'Borges', genero:'Policial', año: 1990};

var tienePropiedad = libro.hasOwnProperty ('nombre');
console.log (tienePropiedad); //En esta primer iteracion del codigo se pregunta si es que en el objeto libro existe la propiedad nombre, retorna false

tienePropiedad = libro.hasOwnProperty('autor');
console.log (tienePropiedad); // En esta segunda se pregunra si es que en 'libro' existe la propiedad 'autor' y esto es true

/* Ahora veremos la propiedad del objeto general 'Object', usando la funcion keys, lo que nos devuelve todas las propiedades de un objeto, por ejemplo: */

console.log('');
console.log('');
console.log('Ejemplo de uso de la funcion keys');

//Usando la el ya creado objeto 'libro'. veremos todas las propiedades del mismo, para eso lo guardaremos en una variable para imprimir

var todasLasPropiedades = Object.keys(libro); // Esto nos dara todas las propiedades del objeto libro, imprimimos [NOTA: Usar siempre Object para esto]
console.log (todasLasPropiedades);

// Nuevo ejemplo, ahora usaremos el bucle especial FOR-IN, aclarando antes que aunque suena similar no tiene la misma funcionalidad que el bucle FOR en si
// El bucle FOR se usa unicamente para recorrer ARRAY y el bucle FOR-IN para recorrer objetos, veamos un ejemplo de aplicacon de este ultimo:

//Empezaremos por crear un onjeto llamado mundo donde pondremos diferentes propiedades y sus valroes
console.log('');
console.log('');
console.log('Ejemplo: Ciclo FOR-IN, aplicaciones y sintaxis');
console.log('');

var mundo = {continentes: 7, paises: 195, oceanos: 5};
// Ahora implementamos el ciclo FOR-IN con la funcion de iteracion prop, para ir almacenando cada uno de los elementos en el y repetir el ciclo
// hasta obtener el un arreglo que nos indique cada una de las propiedades del objeto y su valor:

for (var prop in mundo){
    console.log('La propiedad es:' + prop); // Esta notacion nos da como salida la 'propiedad' a traves de la variable prop unicamente
    console.log('y su valor es:' + mundo[prop]); // Usando la bracket notation, podemos acceder a los valores de cada propiedad descrita arriba
}