const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = (req, res) => res.json();
userCtrl.getUser = (req, res) => res.json();
userCtrl.createUser = (req, res) => res.json();
userCtrl.deleteUser = (req, res) => res.json();



module.exports = userCtrl;