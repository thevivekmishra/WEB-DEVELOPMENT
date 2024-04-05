//install jsonwebtoken and import

const User = require("../models/usermodel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.login = async (req, res) => {
    try {
        //fetch email and password from request body
        const { email, password } = req.body

        //validation 
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill the required data for login"
            })
        }

        //now check the user is registered or not 
        let user = await User.findOne({ email })
        //if not a registered user 
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "You are not a registered user please sign in first"
            })
        }
        //varify password and generate a jwt token 
        //payload--> actual data we want to pass 
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };
        if (await bcrypt.compare(password, user.password)) { //user.password means the password is stored inside user
            //if password matched create jwt token using sign method
            let token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h" }) //here we are using secret_key which is stored in .env file so we have to import .env file using dotenv

            //inseting token in user
            user = user.toObject(); //converting in object 
            user.token = token;
            user.password = undefined;  //hiding password from user's object not from database 

            //sending cookie into response (cookie takes 3 things name value and option
            //so we have to create options for cookies)

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),//1000 fom miliseconds
                httpOnly: true
            }
            res.cookie("vivek", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "User logged in  successfully"
            })

            // res.status(200).json({
            //     success: true,
            //     token,
            //     user,
            //     message: "User logged in  successfully"
            // })

        }
        else {
            return res.status(400).json({
                success: false,
                message: "incorrect password"
            })
        }

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "login error please try again "
        })
    }
}