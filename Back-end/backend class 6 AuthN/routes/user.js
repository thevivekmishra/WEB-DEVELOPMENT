const express = require("express");
const router = express.Router();

const { signup } = require("../controller/authorization")
const { login } = require("../controller/authentication")

router.post("/signup", signup)
router.post("/login", login)

// importing middleware
const { auth, isStudent, isAdmin } = require("../middleware/auth")

//testing routes
router.get("/test",auth,(req,res) => {
    res.json({
        success:true,
        message:"test successful"
    })
})

//protected routes 
router.get("/student", auth, isStudent, (req, res) => { //auth ,isStudent is the middleware 
    res.json({
        success: true,
        message: "you are logged in as student successfully"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "you are logged in as admin successfully"
    })
})

module.exports = router;
