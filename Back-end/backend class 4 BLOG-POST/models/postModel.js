//import mongoose
const mongoose = require("mongoose");

//create schema
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});

//export
module.exports = mongoose.model("Post",postSchema);
//means we export postSchema with the name Post 