const mongoose = require('mongoose')

const user = require('./user.model')
const gallerySchema = new mongoose.Schema({
galleryphoto:[{type:String,required:true}],
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
},
},
{
    versionKey:false,
    timestamps:true,   
   })


module.exports = mongoose.model("gallery",gallerySchema)