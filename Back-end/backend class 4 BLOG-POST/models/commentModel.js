//import mongoose
const mongoose = require("mongoose")

//create schema & route modules
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});

//export
module.exports =  mongoose.model("Comment",commentSchema)
//means we export commentSchema with the name comment 