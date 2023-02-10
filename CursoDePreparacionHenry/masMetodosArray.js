/*Ahora vamos a ver el metodo para */ console.log('Separar un String en un Array y posteriormente volverlo a hacer string');

var palabra = 'Henri'; // La palabra esta mal escrita
console.log(palabra);

var separada = palabra.split(''); // Se va a separar cada palabra por un ' '
console.log (separada);

// Eliminar ultima letra 

separada.pop ();
console.log (separada);

// Agregar la letra correcta al final

separada.push ('y');
console.log (separada);

// Unir nuevamente los terminos en una palabra o string

var unida = separada.join('');
console.log(unida);

// En la consola se mestra hasta este punto como es que se fueron haciendo los cambios en el elemento palabra hasta corregir el error

console.log('Ejemplo 2: forEach');

// Se requeire imprimir cada uno de los elementos de un arreglo, se hace de la siguiente forma

var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => console.log(num)); // Este nos hace la impresion de todos los numeros dentro del arreglo

numeros.forEach ((num) => {
    if (num == 3){
        console.log(num);
    }
});                                  // Este ultimo arreglo solo imprimira los valores que sean igual a 3 en el arreglo

// NOTA: el metodo forEach nunca va a alterar el contenido del arreglo en ninguno de sus elementos, para eso esta el siguiente metodo

console.log('Metodo .map: Se usa para alterar el contenido de un arreglo, ej:');

// Se desea incrementar una unidad a cada uno de los numeros dentro de un array, por lo que...

var masUno = numeros.map((num) => {
    return num + 1;
});
console.log (masUno);


console.log('Ejemplo 3: Uso de bucle FOR en combinacion con ARRAY');

// Se requiere una funcion que al recibir un 'STRING' nos indique que la palabra contiene la letra P, para eso...

function findP (string){
    var letras = string.split ('');

    for (let i = 0; i < letras.length; i++){
        if (letras[i] === 'p'){
            console.log ('Si contiene p');
        }
    }
}

findP('JavaScript');
findP('Henry');
findP('penal');

/* Ahora usaremos un ciclo while para ingresar valores a un array, ejemplo */

console.log ('Ejemplo 4: Uso de ciclo while en un array');

var arr = [];

while (arr.length < 12){
    arr.push('Booom');
}
console.log(arr);