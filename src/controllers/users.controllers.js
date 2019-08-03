const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

usersCtrl.createUser = async (req, res) => {
    const { name, lastname, username, password, email, birthdate, gender } = req.body;
    const newUser = new User({ name, lastname, username, password, email, birthdate, gender });
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.json({title: 'User Created'});
};

usersCtrl.getUser =  async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

usersCtrl.UpdateUser = async (req, res) => {
    const { name, lastname, username, password, email, birthdate, gender } = req.body;
    const updateUser = new User({ name, lastname, username, password, email, birthdate, gender });
    updateUser.password = await updateUser.encryptPassword(password);
    await User.findOneAndUpdate({_id: req.params.id}, {
      updateUser
    });
    res.json({message: 'User Updated'});
};

usersCtrl.DeleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('user deleted');
};

module.exports = usersCtrl;
