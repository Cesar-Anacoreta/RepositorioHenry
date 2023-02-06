/* Operacores logicos de and, or y not, se represetnan con los simbolos &&, || y ! respectivamente, son tal cual
las fucniones e las compuertas logicas que conocemos*/

// Ejemplo de uso de AND o Y [&&]

function mayorYMenor (num){
    if (num > 5 && num < 10){
        console.log (true);
        return (true);
    } else console.log (false);
    return (false);
}

//mayorYMenor (8);

// Ejemplo 2 de uso de and ahora con tres condiciones, mayor que 5, menor que 20 y que sea par

// Ejemplo de uso de AND o Y [&&]

function mayorYMenorYPar (num){
    if (num > 5 && num < 20 && num % 2 === 0){
        console.log (true);
        return (true);
    } else console.log (false);
    return (false);
}

//mayorYMenorYPar (16);

// Ejemplo de operdor logico OR, O u ||

function operadorO (str){
    if (str === 'Henry' || str.length<2){
        console.log (true);
        return true;
    } else console.log (false); return false;
}

//operadorO ('Henry');

// Ejemplo de operador logico NOT o No o ! lo cual evalua la condicion a la inversa, si es true lo pasa a false y al reves

function negacion(permiso){
    if (!permiso) console.log('Tiene permiso de salir');
    else console.log ('Que no ya dije que no...');
}

//negacion(false);

// Ejemplo de condicion compleja con combinacion de diferentes operadores logicos

function condicionCompleja (num){
    if (num > 9 && num % 2 === 0 || num === 3) console.log (true);
    else console.log(false);
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
condicionCompleja(11);
condicionCompleja(12);