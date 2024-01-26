

const fs = require('fs');
const { resolve } = require('path');



const crearArchivo = async (val = 5, list = false, hasta = 10 ) =>{

    try { 
        console.log("=================");
        console.log("Tabla del :", val);
        console.log("Multiplicado hasta :");
        console.log("=================");

    let salida = '';

   
    
    for (let i=1; i<=hasta; i++){
        salida += `${val} * ${i} = ${val * i}\n`
    }

    if (list){
        console.log(salida);
    }
    
   
    
    fs.writeFileSync(`./salida/tabla${val}.txt`, salida);
       
    
        return `tabla${val}.txt`;

        
    } catch (err) {
        throw(err);
        
    }


}

module.exports = {
    crearArchivo

}

