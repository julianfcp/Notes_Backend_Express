const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, // limpia espacios
        unique: true // no se repitan usuarios
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Almacena la fecha de creacion
});


// Coleccion de datos User
module.exports = model('User', userSchema);