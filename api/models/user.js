import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique : true
    },
    email:{
        type:String,
        unique : true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default:false
    },
    educationDetails:{
        type: Array,
        default: []
    },
    documents : {
        type: Array,
        default: []
    },
    appliedFor : {
        type: Array,
        default: []
    }
    
},{timestamp:true}
);

export default mongoose.model("user",userSchema);