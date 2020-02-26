const express = require('express');  // EMC5 javascript - permite crear un server
const cors = require('cors'); // middleware que permite intercambiar datos entre dos servidores (front y back)
const app = express();


// Para ejecutar la aplicacion ejecuto> npm run dev (este script se encuentra en package.json)

// si existe definida la variable PORT en env la toma sino toma 4000

// **************************************************************
// ********************** settings ******************************
// **************************************************************
app.set('port', process.env.PORT || 5000);



// **************************************************************
// ********************* middlewares ****************************
// **************************************************************
app.use(cors()); // habilitar cors
app.use(express.json()); // habilitar envio de files formato json



// **************************************************************
// ************************** Routes ****************************
// **************************************************************
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;


