/* Las funciones son operaciones muy similares a las funciones 
matematicas de f(x) donde dependiendo del valor de una variable
la ordenada tomaba su valor, EJEMPLO: */

function sumaTres (x) {
    console.log(x + 3);
}

sumaTres(5); 

/* Analisis de la funcion, tal cual es la funcion f(x)= x + 3
function es el operador, sumaTres es el nombre que le vamos a asignar
a nuestra funcion para llamarla mas adelante, la (x) es el argumento de parametro
y podemos agregar los argumentos que se necesiten, lo que está entre
llaves {será el cuerpo de la funcion} y es donde se indican las instrucciones
que va a ejecutar la funcion */

// Tres formas de declarar funciones 

// Primera y mas sencilla
function sumaTres3 (x){
    return x + 3;
};

// Segunda (guarda la funcion en una variable)
var suma3 = function (x){
    return x + 3;
};

// Tercera "funcion de flecha"

var sumaThree = (x) => {
    return x + 3;
};