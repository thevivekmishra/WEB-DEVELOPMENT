//import mongoose
const mongoose = require("mongoose");

//create schema and route handler
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Like",likeSchema);
//means we export likeSchema with the name Like
