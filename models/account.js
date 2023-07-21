const mongoose = require('mongoose');
import accountSchema from '/schemas/accounts'

module.export = account

const account = mongoose.model('account', accountSchema);