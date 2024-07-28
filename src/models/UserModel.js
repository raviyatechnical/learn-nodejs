const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false, // To exclude password from query results by default
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);    
module.exports = User;