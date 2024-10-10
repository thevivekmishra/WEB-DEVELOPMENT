//first install bcrypt to encrypt the password

const User = require("../models/usermodel")
const bcrypt = require("bcrypt")

//signup route handler
exports.signup = async(req,res) => {
    try{
        //get data from req body
        const {name,email,password,role} = req.body;

        //check if user already exist in db
        const existingUser = await User.findOne({email});

        if(existingUser) {
            return res.status(400).json({
                success:false,
                message:"user already exist"
            })
        }

        //bcrypt password 
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10); //.hash is a function and 10 is the no. of times of encry
        }
        catch(error){
            return res.send(400).json({
                success:false,
                message:"error in encryption of password"
            });
        }

        //create entry for user in database
        const user = await User.create({name,email,password:hashedPassword,role})//if you remove hashedpassword you will see original password

        return res.status(200).json({
            success:true,
            message:"User database created successfully!!"
        })

    }
    catch(error){
        console.log(error)
        return res.send(500).json({
            success:false,
            message:"auth failed"
        })
    }
}