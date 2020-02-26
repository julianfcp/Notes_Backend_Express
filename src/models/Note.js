const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Almacena la fecha de creacion del schema
});


// Coleccion de datos Note
module.exports = model('Note', noteSchema);