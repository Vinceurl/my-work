const mongoose = require('mongoose');
const bcrupt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        require: true,
    password: {
        type: String,
        unique: true,
        required:true}}
});

userSchema.pre('save', function(next){
    const user = this

    bcrupt.hash(user.password,10,(err,hash)=>{
        user.password - hash
        next()
    })
})

const account = mongoose.model('account', userSchema)
module.export = account