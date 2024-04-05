const Like = require("../models/likeModels");
const Post = require("../models/postModel");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({
            post, user
        })
        const savedLike = await like.save();

        //update the post collection on this basis
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: savedLike._id } }, { new: true })
            .populate("likes")
            //.populate("comment")
            .exec()
        res.json({
            post: updatePost,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            error: "error in like"
        })
    }
}


//for unlike 
exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedLike._id } }, { new: true });

        res.json({
            post: updatedPost,
        })
    }
    catch (error) {
        console.log(error)
        return res.json({
            error: "error in unliking the post"
        })
    }
}