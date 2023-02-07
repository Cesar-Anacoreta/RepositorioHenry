/*La condicion DO WHILE, es un ciclo que ejecuta una sentenci hasta qye la condición de comprobacion de evalua como FALSE
por EJEMPLO: */

var result = '';
var i = 0;

do {
    i = i + 1;
    result = result+ i;
} while (i < 10 );

console.log(result); // En este ejemplo el ciclo incrementa el valor de result con i + 1, hasta que el valor i es 10.