const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    birthdate: { type: Date, required: true },
    gender: { type: String, required: true }
}, {
  timestamps: true
});

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);
