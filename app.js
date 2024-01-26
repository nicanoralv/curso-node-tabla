
//const {crearArchivo} = require('./helpers/multiplicar');

const {crearArchivo } = require("./helpers/multiplicar")

const colors = require('colors');

const argv = require('./config/yargs')


console.clear();

//console.log( process.argv)
//console.log(argv)

//console.log ('val: yargs', argv.val)

 //const val =8;

crearArchivo(argv.v, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err))
 