const mongoose = require("mongoose")



const savePostSchima = new mongoose.Schema({
    
    postName:  {
        require:true,
        type:String,
    }, 
    userName: {
        require:true,
        type:String,
    },
    savePostUserName:{
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
    likes: { 
        type: Number
     }
    // likedBy: [{ type: mongoose.Schema.Types.String, ref: 'userRegModel' }]
    
})



const savePostModel = new mongoose.model("savePost",savePostSchima)

module.exports = savePostModel