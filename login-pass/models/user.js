const mongoose = require("mongoose");
// 1 mongoose ko cannect kiya to schema banaya 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

const User = mongoose.model('user',userSchema)
module.exports = User;