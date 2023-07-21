const mongoose = require('mongoose');

module.export = registrationSchema

const registrationSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    DOB: String,
    Email: String,
    Userid: String,
    PassWord: String,
  });