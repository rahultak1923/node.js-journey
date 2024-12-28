const mongoose = require("mongoose")

// this is a schema define 
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        // unique: true  // same email do no repeat a create a new user 
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    }
})

// this is a schema model 
const User = mongoose.model("user", userSchema)

module.exports = User