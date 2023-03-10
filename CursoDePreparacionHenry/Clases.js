// Como nota importante, cuando tenemos qie declarar una clase se hace con "function" y la clase siempre vá su primer letra en MAYUSCUL

// Hay dos formas de declarar una clase dentro del programa, la primera es:

// FUNCION CONTRUCTORA

function Auto (puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;

    this.information = function (){
        console.log('Este es un ' + this.marca  + ' de color ' + this.color);
    }
}

var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

;miPrimerAuto.information();

//console.log(miPrimerAuto);
//console.log(miPrimerAuto.marca);


// Ahora la segunda forma de declarar clases dentro del programa es

// EXPRESIÓN DE CLASE

class Autoo {
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion (){
        console.log ('Este es un ' + this.marca + 'de color ' + this.color)
    }
}

var miSegundoAuto = new Autoo (4, 'Blanco', 'Fiat', 2016, 4);

console.log(miSegundoAuto);
console.log (miSegundoAuto.año);