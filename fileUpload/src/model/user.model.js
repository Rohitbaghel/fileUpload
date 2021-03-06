const mongoose = require('mongoose')


const  UserSchema = new mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    profile_pic:[{type:String, required:true}]
},
{
 versionKey:false,
 timestamps:true,   
})

module.exports = mongoose.model('User', UserSchema)