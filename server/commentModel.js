const mongoose = require ("mongoose")

const commentSchema= new mongoose.Schema({
    username:String,
    postId:String,
    comment:String,
    date:{
        require:true,
        type:String,
    }
})

const commentModel = new mongoose.model("comment",commentSchema)

module.exports = commentModel