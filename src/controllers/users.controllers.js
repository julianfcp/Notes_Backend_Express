const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await  User.find(); // 
    res.json(users);
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user); // devuelve el usuario con el id dado
}
userCtrl.createUser = async (req, res) => {
    const { username } = req.body; // destructuring de los datos que vienen
    const newUser = new User({
        username
    });
    await newUser.save(); // se guarda el usuario
    console.log(newUser);
    res.json({message: 'User Created'});
}
userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({Message: 'User id: '+req.params.id+' deleted'});
}



module.exports = userCtrl;