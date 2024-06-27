const mongoose = require("mongoose")

const friendRequestAcceptSchema = new mongoose.Schema({
    senderName:{
        type:String,
        require:true
    },
    receaverName:{
        type:String,
        require:true
    },
    profilepic:{
        type:String,
        require:true
    }
})

const friendRequestAcceptModel = mongoose.model("friendRequestAcceptModel",friendRequestAcceptSchema)

module.exports=friendRequestAcceptModel