import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    Email: {
        type:String,
        required: true,
        unique:true,
    },   
    Password: {
    //    required: true,
       type:String,
       required: true,
       select:false,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },   
});

export const Userdata = mongoose.model("Userdata", userSchema)