const File = require("../models/file")
const cloudinary = require("cloudinary").v2

function isFileTypeSupported(type, supportedType) {
    return supportedType.includes(type)
}

//function to upload file to cloudinary--- ( first create folder to the cloudinary )
async function uploadFileToCloudinary(file, folder, quality) { //quality added
    const options = { folder };

    if (quality) {
        options.quality = quality
    }

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options)
    //uploader.upload is a method to upload file to cloudinary 
}


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
            message: "image uploaded successfully "
        })
    }


    catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "image upload failed"
        })
    }
}