const Comment = require("../models/commentModel")
const Post = require("../models/postModel")

//business logic
exports.createComment = async (req, res) => {
    try {
        //fetch data from req body
        const { post, user, body } = req.body;
        //create an comment object
        const comment = new Comment({
            post, user, body
        });
        //save the comment object
        const savedComment = await comment.save();

        //find the post by id and add the new comment to the comment array
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments") //.populate show the actual document or we can fetch the actual document using .populate
            .exec();

        res.json({
            post: updatedPost,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "error while creating the comment "
        })
    }
}