const File = require("../models/file")

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.vivek;
        console.log("file fetched ", file);

        //create path where file need to be stored
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        
        //__dirname is the current directory 
        // /files/ is the name of the folder
        //Date.now() is the name of the file because date never repeat so file name also does not repeat

        file.mv(path, (err) => {
            console.log(err);
        });

        res.json({
            success: true,
            message: "local file uploaded successfully"
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "local file upload failed"
        })
    }
}