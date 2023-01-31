// La siguiente funcion al ejecutarse en la terminal se observa que
// da dos valores, una impresión y un 'string'
function CuidadoConElConsoleLog (nombre) {
    console.log(nombre);
    return nombre;
}

// Caso contrario en este codigo que al ejecutarse no apaece nada 
// mas que un valor indefinido que indica la ausencia del return
function cuidadoConElConsoleLog (nombre) {
    console.log(nombre);
}