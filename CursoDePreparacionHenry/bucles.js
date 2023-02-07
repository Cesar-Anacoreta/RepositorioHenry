/*Los ciclos o bucles sirven para ayudarse en tareas repetitivas de modo que no tengamos que estar repitiendo lineas de codigo hasta alcanzar lo 
que se busca, por ejemplo, si queremos incrementar el valor de una variable de una unidad hasta llegar a cierto valor habria que hacer lo siguiente: */

// Ciclo "FOR", para incrementar el valor de una variable de uno en uno hasta llegar a 10

/* Ejemplo 1: La sintaxis de for usa tres parametros (var i=0;) es la declaracion de una variable que hará la función de pivote de iteraciones para 
contar la cantidad de ciclos que se esta ejecutando el for; (i<10;) es una condicion la cual mientras se cumpla mantendra ejecutando el bucle y
(i++) nos dice que es lo que le va a pasar a la variable "i" mientras se repiten los ciclos for, en este caso es un incremento de 1 por cada iteración*/

console.log ('Ejemplo 1:');
var suma=0;
for (var i=0; i<10; i++){
    suma = suma +1;
    console.log(suma);
} 

// Al ejecutar esto cada ciclo va a imprimir el valor de la cariable suma desde 1 hasta 10.

//Ejemplo 2: Ahora sera el mismo caso anterior pero sumando la variable de iteración e imprimindo los valores por cada repetición y al final con la
//variable SUMAA.

console.log('Ejemplo numero 2:');
var SUMAA = 0;
for (var e=0; e<5; e++){
    SUMAA = SUMAA + e;
    console.log('El valor de la variable de iterecion es:' + e);
}
console.log ('El valor de SUMAA es:' + SUMAA);

/* Ciclo WHILE; el ciuclo while se usa cuando no tenemos conocimiento de cuantas itereacones se van a hacer para poder terminar el ciclo y la condicion
es que el parametro sea TRUE; hasta que esto se vuelva false, el ciclo se sigue ejecutando*/

console.log('Ejemplo 1 de while:');

var count = 0;
while(count < 19){
    count = count + 1;
    console.log('El valor de count es:' + count);
}

/*La diferencia del ciclo FOR y WHILE esta en el uso, ya que FOR se usa cuando sabemos la cantidad exacta de veces que necestiamos repetir un ciclo
a diferencia de WHILE que se usa cuando requerimos repetir una acción hasta que la condición que tenemos como condición ya no s ecumpla y entonces el 
programa salga del bucle, ademas que en FOR se usan tres parametros de configuración y en el ciclo WHILE solo se usa una condición booleana */