console.log(3 + 5); // No olvides guardar antes de correr
console.log(10-6);
console.log(2*5);
console.log(25/4);

/* Modulo o resto [%]:
Se usa cuando queremos saber cuanto sobra de una division no divisible con un resultado entero*/

console.log(95 % 4);

// Prioridad de operaciones matematicas
// Es como en algebra pero JavaScript tiene su propia table NOTA: Buscarla despues

console.log(3+5*2-8); // Primero se ejecuta la multiplicación y al final sumas y restas, por eso da este valor

// Teniendo en cuenta la prioridad de las operaciones podemos usar los signos de agrupacion Ejemplo:
console.log((3+5)*2-8); //El resultado ya es diferente al de la operacon anterior
 // Adicion de strings

 console.log('Hola ' + 'Cesar');

 var nombre='Cesar';
 var saludo='Hola ';
 var LLegar=saludo+nombre;

 console.log(LLegar);