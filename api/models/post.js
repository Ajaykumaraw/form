import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postTitle:{
        type:String,
        required:true,
    },
    postDesciption:{
        type:String,
    },
    postEligibility:{
        type:Array,
        default:[]
    },
    
},{timestamp:true}
);

export default mongoose.model("post",postSchema);