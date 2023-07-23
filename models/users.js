const mongoose = require('mongoose');


module.export = account

const userSchema = mongoose.Schema;

const user = new user({
    username: String,
    password: String
});

const account = mongoose.model('account', userSchema)
