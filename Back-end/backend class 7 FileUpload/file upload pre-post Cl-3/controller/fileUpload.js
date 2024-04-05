const File = require("../models/file");
const { options } = require("../routes/FileUpload");
const cloudinary = require("cloudinary").v2

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

//cloudinary image upload--

function isFileTypeSupported(type, supportedType) {
    return supportedType.includes(type)
}

//function to upload file to cloudinary--- ( first create folder to the cloudinary )

async function uploadFileToCloudinary(file, folder,quality) {
    const options = { folder }
    if (quality) {
        options.quality = quality
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options)
    //uploader.upload is a method to upload file to cloudinary 
}

exports.imageUpload = async (req, res) => {
    try {

        //fetch data
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        //fetch file
        const file = req.files.imageFile; //file is the name of the file
        console.log(file)

        //validation
        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("filetype:", file)

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                success: false,
                message: "file format not supported"
            })
        }

        //if file format supported
        const response = await uploadFileToCloudinary(file, "webDev")
        console.log(response)

        //saving image in database 
        const fileData = await File.create({
            name, tags, email,
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "image uploaded successfully "
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).josn({
            success: false,
            message: "image upload failed"
        })
    }
}

//video upload ----
exports.videoUpload = async (req, res) => {
    try {
        // Fetch data
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;

        // Validation
        const supportedType = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("filetype:", fileType);

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported"
            });
        }

        // If file format is supported
        const response = await uploadFileToCloudinary(file, "webDev");
        console.log(response);

        // Save video data in the database
        const fileData = await File.create({
            name,
            tags,
            email,
            videoUrl: response.secure_url 
        });

        res.json({
            success: true,
            videoUrl: response.secure_url,
            message: "Video uploaded successfully"
        });
    } 
    catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Video upload failed"
        });
    }
};

//image size reducer or compressed image upload 
exports.imageSizeReducer = async (req, res) => {
    try {
        //fetch data
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        //fetch file
        const file = req.files.imageFile; //file is the name of the file
        console.log(file)

        //validation
        const supportedType = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("filetype:", file)

        if (!isFileTypeSupported(fileType, supportedType)) {
            return res.status(400).json({
                success: false,
                message: "file format not supported"
            })
        }

        //if file format supported
        const response = await uploadFileToCloudinary(file, "webDev",30) //30 is the quality value
        console.log(response)

        //saving image in database 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        })

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "reduced image uploaded successfully "
        })
    }


    catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "reduced image upload failed"
        })
    }
}