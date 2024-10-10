const express = require('express');
const router = express.Router();

const {createComment} = require("../controller/commentController");
const {createPost,getAllPosts} = require("../controller/postController");
const {likePost,unlikePost} = require("../controller/likeController");

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

module.exports= router;
