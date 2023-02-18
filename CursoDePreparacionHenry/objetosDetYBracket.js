/*En este ejercicio vamos a ver la propiedad que tiene cada una de las funciones de escritura y la sintaxis de dot y bracket
haremos una modificaoin de una funcion por medio de estas propiedades*/
console.log('Ejemplo de notacion incorrecta:'); // El simple hecho de no tener la notacion adecuada hace que la funcion no ejecute ninguna
// de las acciones que se estan indicando que realice, tener cuidado con la NOTRACION SIEMPRE.
console.log('');

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas['propDos'] = ['Hamburguesas', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);


console.log('');
console.log('');
console.log('Ejemplo de notacion correcta: En la propDos, borramos las comillas'); // Aqui se hace evidente el cambio que sufre la funcion y 
//los objetos con la notacion adecuada

console.log('');

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas.propUno = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas); // Este primer cambio denota que la notacion de bracket es efectiva para lograr los cambios indicados en la pantalla de la terminal


////////////////////////////////////////////////
console.log('');
console.log('');
console.log('Ejemplo de notacion correcta: En la propUno, copiamos la notacion de la prepDos y vemos los cambios'); // Aqui se hace evidente el cambio que sufre la funcion y 
//los objetos con la notacion adecuada

console.log('');

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'];
};

diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas); // Este cambio en ambas estructuras del codigo hace que las modificaiones se ejecuten de forma adecuada y eso esta bien OK.