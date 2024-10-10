// writing middleware for auth , isStudent ,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
        //extract jwt token
        //there are 3 ways to extract tokem first from body sec from cookie third from header

        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token not found "
            })
        }
        //if found then verify
        try {
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            console.log(decode);
            req.user = decode  //storing all information of payload inside req.user
        }

        catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }
        next();  //if the auth completed go to next middleware if it is
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Auth failed"
        })
    }
}



//middleware for isStudent 
exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "You are not elegible to access student route "
            })
        }
        next();
    }

    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "isStudent auathentication failed  "
        })
    }
}


//middleware for isAdmin
exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "You are not eligible to access Admin route "
            })
        }
        next();

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "isAdmin authentication failed"
        })
    }
}