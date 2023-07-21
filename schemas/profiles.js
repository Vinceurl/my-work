const mongoose = require('mongoose');

module.export = profilesSchema

const profilesSchema = mongoose.Schema({
    Username: String,
    email: String,
    phone: String
});