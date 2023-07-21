const mongoose = require('mongoose');
import newAccountSchema from '/schemas/register'
module.export = register

const register = mongoose.model('registration', newAccountSchema);