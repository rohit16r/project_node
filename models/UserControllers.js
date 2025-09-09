import mongoose from "mongoose"
const userschema=new mongoose.Schema({
    name:String,
    age:Number,
    dob:Date,
    gender:String,
    branch:String,
    image: String,
    marksheet:String,
    video:String

})
const User=mongoose.model("User",userschema)
export default User 