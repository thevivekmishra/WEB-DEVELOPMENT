const express = require("express");
const router = express.Router();

const {imageUpload} = require("../controller/fileUpload");

//api route

router.post("/imageUpload",imageUpload);


module.exports = router;


