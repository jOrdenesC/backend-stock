const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    rut: String,
    name: String,
    lastName: String,
    user: String,
    password: String,
    phone: String,
    birthday: String,
    address: String,
    genre: String
});

module.exports = mongoose.model('users', userSchema);