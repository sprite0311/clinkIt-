import mongoose from "mongoose";

const user = mongoose.Schema({
    userName: String,
    friends: [{
        _id: String
    }],
    profilePhoto: String,
    about: String,
    password: String
})
