/* Los datos booleeanos son los que devuelven como resultado
un valor ya sea true o false como en el siguiente ejemplo*/
console.log('BOOLEANOS:');
console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7);
console.log('Asignación:');
var cajon1 = 'Bufanda verde';
console.log(cajon1); 

/* IGUALDADES
La igualdad estricta "===" verifica que tanto el tipo de dato
como el valor sean iguales y la igualdad simple "==" 
solo verifica el valor. NOTA "=" eso es una asignación de valor
no una expresion de igualdad, ej */

console.log('Igualdades:');
console.log(3 == 3);
console.log(3 === 3);
console.log( 3 == '3');
console.log(3 === '3');

/* ASOCIATIVIDAD
Tiene que ver con el orden en que se ejecutan las operaciones
en estos ejemplos las operaciones de asignancion se llevan a cabo
de derecha a izquierda por lo que se obtienen los siguientes
resultados*/

console.log('Asociatividad a la derecha: ');
var a = 1;
var b = 2;
var c = (a = b); /* vamos de derecha a izquierda por lo que
si a = b y b = 2, entonces el valor de b se carga en a y  a = 2
ahora como a y b son = 2 y se esta cargando el valor de a en c
entonces ahora c = 2 tambien, comprobacion: */
console.log('Si colocamos que a = 1 y b =2');
console.log ('entonces al hacer la operacion c = a = b: a, b y c valen respectivamente:')
console.log(a);
console.log(b);
console.log(c);

console.log('Asociatividad a la izquierda por division:');
/* Es el caso contrario al anterior, por ejemplo si la asignacion 
empieza de derecha a izquierda, la division es el caso contrario
hablando de sentido de las operaciones por lo que inicia de derecha
hacia izquierda, ejemplo:*/

console.log('16 / 2 / 4 = ',16 / 2 / 4);
console.log('Fin... CAR');