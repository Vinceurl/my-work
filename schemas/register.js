const mongoose = require('mongoose');

module.export = newAccountSchema

const newAccountSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    DOB: String,
    Email: String,
    Userid: String,
    PassWord: String,
  });