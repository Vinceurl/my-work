const mongoose = require('mongoose');

module.export = registrations

const newAccountSchema = mongoose.Schema

const newAccount = new account({
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