/* Aqui veremos un ejemplo de para que sirve la funcion THIS */

// Creamos un objeto llamado mascota donde podremos observar los datos de una mascota e imprimir algo de información

var mascota = {
    animal: 'Perro', raza:'Pug', amistoso: true, dueña: 'Mindy',
    info: function (){
        console.log('Mi perro es un ' + this.raza); // En primera instancia era: console.log('Mi perro es un' + raza); sin el This antes de raza
        // esto arrojaba un error en la terminal diciendo que la variable raza no estaba definida, esto por que no se ha indicado que raza
        // es un termino de un objeto, para eso es la funcion 'this' antes de la variable raza, con eso la funcon lo reconoce y peude funcionar correcto
    },
};

mascota.info();

/* this, es para indicar el contexto de algo, digamos que busca donde se encuentra algo similar y lo marca como el contexto de esa palabra, en
este caso al uzar la variable raza acompañada con el termino this, el programa lo relaciona con el objeto mascota y es así como identifica que la
palabra raza hace referencia a una propiedad del objeto mascota y ya lo reconoce como tal. */