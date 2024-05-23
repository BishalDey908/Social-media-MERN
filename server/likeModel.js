const mongoose = require("mongoose")

const likeSchema =new mongoose.Schema({
    likedUser:[String],
    postId:[String],
})

const likemodel = new mongoose.model("like",likeSchema)

module.exports = likemodel