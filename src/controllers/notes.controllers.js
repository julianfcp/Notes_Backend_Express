const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await  Note.find(); // la funcion es asincrona por lo que se debe usar async
    res.json(notes);
}

notesCtrl.getNote = (req, res) => res.json({message: 'Note: '+req.params.id});

notesCtrl.createNote = async (req, res) => {
    const {title, content, date, author } = req.body; // destructuring de los datos que vienen
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save(); // se guarda la nota
    console.log(newNote);
    res.json({message: 'Note Created'});
}
notesCtrl.updateNote = (req, res) => res.json({Message: 'Update Note: '+req.params.id});
notesCtrl.deleteNote = (req, res) => res.json({Message: 'Note: '+req.params.id+' deleted'});

module.exports = notesCtrl;