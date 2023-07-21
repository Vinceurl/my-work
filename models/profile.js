const mongoose = require('mongoose');
import profilesSchema from '/schemas/profiles'

module.export = profiles

const profiles = mongoose.model('profile', profilesSchema);