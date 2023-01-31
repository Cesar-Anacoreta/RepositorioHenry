/* Este es un codigo basico de IF ELSE, donde estructuralmente
la condicion del IF es la que determina que parte del codigo se
va a ejecutar:

Si 'destino' es Brasil, se cumple la primer condicion
Si es Argentina se cumple la segunda condicion
Y si no es ninguna cae en la opcion general de else simple

*/
function viajar(destino){
    if(destino === 'Brasil'){
        console.log('Gire a la IZQUIERDA');
    } else if (destino === 'Argentina') {
        console.log('Gire a la DERECHA');
    } else if (destino === 'Mexico'){
        console.log('¡Viva México!');
    } else {
        console.log('Estamos perdidas jaja...')
    }
}

// Funcion de practica

function puedeManejar (edad){
    if (edad >= 18){
        console.log('Si puede manejar');
    } else {
        console.log('No puede manejar');
    }
}

// Llamar la funcion que desee

viajar('Mexico');
puedeManejar (28);