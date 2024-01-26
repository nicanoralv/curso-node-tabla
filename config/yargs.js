const argv = require('yargs')
    .option('v', {
        alias: 'val',
        type: 'number',
        demandOption: true,
        describe:"El el valor a multiplicar"
    })
    .option( 'l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        describe:"Indica si se quiere lista la tabla o no"
    })
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:"Descrbe el numero hasta el cual se debe resolver la multiplicacion"
    })
    .check( (argv, options) => {
        if (isNaN(argv.v)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    
.argv;


module.exports = argv;