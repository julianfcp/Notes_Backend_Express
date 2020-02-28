// to run mongo --> mongodb in terminal
// mongod -- config /usr/local/etc/mongod.conf --fork
const mongoose = require('mongoose');

// direccion donde estara mi db
// no es necesario crear la db previamente, mongodb la crea automaticamente
// la uri se guarda en una variable de entorno .env
// se llama mediante el objeto process
// el archivo .env no deberia subirse a github o git
// utilizo operador ternario para asegurar que la app se conecte a una DB
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

// parametros para conectarse a la db
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// variable de conexion
const connection = mongoose.connection;

// cuando la conexion se establece saco un log ..
connection.once('open', () => {
    console.log('DB is connected');
});