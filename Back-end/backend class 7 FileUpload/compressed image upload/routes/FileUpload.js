const express = require("express");
const router = express.Router();

const {imageSizeReducer} = require("../controller/fileUpload");

//api route
router.post("/imageSizeReducer",imageSizeReducer);

module.exports = router;


