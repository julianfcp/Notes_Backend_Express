const { Router } = require('express');
const router = Router();

//******************* Enrutamiento REST **********************
// *** Funciones *** 

const { getUsers,
        createUser,
        deleteUser } = require('../controllers/users.controllers');

router.route('/') // metodo general para todos los usuarios
    .get(getUsers)
    .post(createUser)

router.route('/:id') // metodo para un usuario especifico (id)
    .delete(deleteUser)


module.exports = router;