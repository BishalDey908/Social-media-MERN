const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema({
    sender:{
        type: String,
        required: true
    },
    receaver:{
        type: String,
        required: true
    },
    message:{
        type:String,
        required: true
    }
})

const notificationModel = mongoose.model("notification",notificationSchema)

module.exports = notificationModel