const mongoose = require("mongoose");
const nodemailer = require('nodemailer');


const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    tags: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
})

//post middleware
fileSchema.post("save", async function (doc) {
    try {
        console.log("DOC", doc) //doc contain all the info present in the db 
    
        //transport
        let transport = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        //send mail
        let info = await transport.sendMail({
            from:`Vivek Mishra`,
            to:doc.email,
            subject:"New file uploaded on cloudinary",
            html:`<h2>Congrats!!</h2><p>File Uploaded successfully View here :<a href ="${doc.imageUrl}">${doc.imageUrl}</a>`
        })
        console.log("INFO",info)
    }
    catch (error) {
        console.log(error)
    }
})
module.exports = mongoose.model("File", fileSchema)