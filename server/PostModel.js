const mongoose = require("mongoose")



const PostSchima = new mongoose.Schema({
    
    postName:  {
        require:true,
        type:String,
    }, 
    userName: {
        require:true,
        type:String,
    },
    postImg:{
        require:true,
        type:String,
    },
    date:{
        require:true,
        type:String,
    },
    userPic:{
        require:true,
        type:String
    },
    likes: { type: Number, default: 0 },
    // likedBy: [{ type: mongoose.Schema.Types.String, ref: 'userRegModel' }]
    sharedUser:{
        require:true,
        type:String
    },
    sharedTime:{
        require:true,
        type:String
    }
})



const PostModel = new mongoose.model("post",PostSchima)

module.exports = PostModel