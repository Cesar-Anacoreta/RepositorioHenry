Array.prototype.mayoresQueTres = function() {
    var arregloModificado = [];

    for(let i = 0; i < this.length; i++){
        if(this[i] > 4){
            arregloModificado.push (false);
        } else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
};  

var arreglo = [1, 2, 3, 4, 5, 6, 7];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log (nuevoArreglo);

/*Otro ejemplo de uso de clases

Ahora usaremos el metodo visto para crear una nueva instancia que nos permita ves lo paises del continente*/

class LatinoAmérica {
    constructor (){
        this.paises=[];
    }
}

LatinoAmérica.prototype.agregarPais = function (pais){
    this.paises.push (pais);
};

var continente = new LatinoAmérica ();

continente.agregarPais ('Mexico');

console.log (continente.pais)