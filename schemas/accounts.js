const { builtinModules } = require('module');
const mongoose =require('mongoose');

module.export = accountSchema

const accountSchema = mongoose.Schema({
    accountbalance: String,
    Username: String,
    email: String,
    phone: String
})