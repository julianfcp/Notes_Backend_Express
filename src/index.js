require('dotenv').config();


const app = require('./app'); // importa el servidor creado en app.js
require('./database');



async function main() {
    await app.listen(app.get('port'));  // inicializar el servidor nodejs, await esperar que la funcion se ejecute para ejecutar la siguiente linea async
                                        // port se setea en app.js
    console.log('server on port', app.get('port'));

    


}

main();
