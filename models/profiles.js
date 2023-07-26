const mongoose = require('mongoose');


module.export = profiles

const profile = mongoose.Schema

const accountProfilleSchema = new profile({
    username: String ,
    email:   String  ,
    phone:   String  ,
})

const profiles = mongoose.model('profile', accountProfilleSchema);