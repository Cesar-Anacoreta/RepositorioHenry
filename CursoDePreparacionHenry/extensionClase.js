/*Este es un ejemplo de una clase normal, un repaso de la creacion y base de una clase */

class Persona{
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log('Hola mi nombre es ' + this.nombre + ' y tengo ' + this.edad  + ' años.');
    }
}


/* A partir de aqui se hará un ejemplo de como ralizar la extension de las propiedades de la clase "Persona" */

class Programador extends Persona{
    constructor(nombre,edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    codear (){
        console.log('Hola soy ' + 
        this.nombre + 
        ' y tengo experiencia codeando desde hace ' +
        this.añosDeExperiencia+ 
        ' años.');
    }
}


var jack = new Persona('Jack', 2)
jack.saludar();

var programador = new Programador ('Bruce', 1, 2);
programador.codear();

programador.saludar();