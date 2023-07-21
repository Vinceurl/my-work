const mongoose = require('mongoose');
import accountSchema from './accounts'

module.export = accounts

const accounts = mongoose.model(account, accountSchema)