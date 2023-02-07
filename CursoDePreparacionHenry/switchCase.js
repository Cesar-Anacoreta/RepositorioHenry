/*Este es un ejemplo sencillo del uso de la funcion SWITCH CASE donde el parametro de sitch se compara con cada valor de case y ejecuta el caso
donde hay coincidencia de valores, por ejemplo */

var fruta = 'Naranja';

switch (fruta){
    case 'Naranja':
        console.log('El kilo de naranja esta en 10 pesos');
        break;
    case 'Platano':
        console.log('El kilo de platano esta en 11 pesos');
        break;
    case 'Uva':
        console.log('Nooo la uva si esta bien cara');
        break;
    default:
        console.log('Eso si no tenemos, pida otra cosa por favor...');
}