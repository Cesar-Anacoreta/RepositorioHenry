/*Los Arrays o Arreglos son como matrices o listas de datos que almacenan la informacion de ciertos valores de forma organizada
Hay elementos e indices, los elementos son los datos en si mientras que los indices son la numeracion que van tomando los datos, los 
indices siempre empiezan en 0 y avanzan por lo que si tenemos 3 elementos, habra ocupados hasta el indice numero 2 (0,1,2) */

// Ejemplo 1 : Crear y llenar un array con datos:

var listaDeCompras = []; // En este punto el array ya ha sido creado

listaDeCompras [3] = 'Tomates';
listaDeCompras [1] = 'Lechuga';

//console.log (listaDeCompras); // Esto arrojará todos los datos del array impresos en la terminal

//console.log (listaDeCompras[3]); // Esto nos muestra el valor que hay almacenado en el indice 3 del array

var ingrediente = listaDeCompras[1];

//console.log(ingrediente); // Para este caso lo que sucede es que se crea una variable en la cual guardamos un indice y luefgo se imprime

//Para conocer la extension o numero de indices que tiene un array basta con agregar la herrameinta length:

console.log(listaDeCompras.length); // Aunque solo tenemos 2 elementos en ese array la longitud real del array es 4 al final