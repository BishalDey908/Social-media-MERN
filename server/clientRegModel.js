const mongoose = require ("mongoose")

const userRegSchema = new mongoose.Schema({
    username: String,
    email:String,
    password: String,
    profilePic:{
        type:String,
        default: "noProfilrPic.jpg"
    },
    token:String,
    isLoggedIn:{
        type : Boolean , 
        default : false
    },
    bio:{
        type:String,
        default:"Your bio show here and you can also update your bio"
    }
})

const userRegModel = new mongoose.model("userreg",userRegSchema)

module.exports = userRegModel