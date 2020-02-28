const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await  Note.find(); // la funcion es asincrona por lo que se debe usar async
    res.json(notes);
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note); // devuelve la nota con el id dado
}

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
notesCtrl.updateNote = async (req, res) => {
    const {title, content, author} = req.body;
    // para usar findOneAndUpdate debo cambiar la configuracion en
    // archivo database.js --> useFindAndModify: false
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author
    });
    console.log(content);
    res.json({Message: 'Note: '+req.params.id+' Updated'});
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({Message: 'Note: '+req.params.id+' deleted'});
}



module.exports = notesCtrl;