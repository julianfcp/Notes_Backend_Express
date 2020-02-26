const { Router } = require('express');
const router = Router();

//******************* Enrutamiento REST **********************
// *** Funciones *** 
const { getNotes, 
        createNote, 
        updateNote, 
        deleteNote, 
        getNote } = require('../controllers/notes.controllers');
 
router.route('/') // metodo general para todos los usuarios
    //.get((req, res) => res.send('Notes Route ........ ')) send imprime en html
    .get(getNotes)
    .post(createNote)

router.route('/:id') // metodo para un usuario especifico (id)
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;