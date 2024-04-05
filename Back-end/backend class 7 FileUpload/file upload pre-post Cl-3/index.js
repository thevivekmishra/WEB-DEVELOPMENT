const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

//npm i express-fileupload
//to upload file to the server
const fileupload = require("express-fileupload")
app.use(fileupload({
    useTempFiles :true,
    tempFileDir :'/tmp/'
}));

//import database from config
const db= require("./config/database");
db.connect();

//import cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//import router
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

//default routes
app.get("/", (req, res) => {
    res.send("<h1>File upload class 1</h1>")
})

app.listen(PORT, () => {
    console.log(`App is running at port no :${PORT}`)
})
