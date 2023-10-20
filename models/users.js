lconst mongoose = require('mongoose');
const bcry so cpt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    password: {
        type: String,
        unique: true,
        required:true}}
});

const account = mongoose.model('account', userSchema)
module.export = account