const mongoose = require('mongoose');
const bcrupt = require('bcrypt')
const Schema = mongoose.Schema

const newAccountSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    DOB: String,
    Username:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true,
        unique: true
    },
    confirmPassword:{
        type: String,
        required: true,
        unique: true
    }

})

const registrations = mongoose.model('newaccount', newAccountSchema);

module.export = registrations