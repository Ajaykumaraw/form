import mongoose from "mongoose";

const appliedPostSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    postTitle:{
        type:String,
    },
    postCredentials:{
        type:String,
    },
    userId: {
        type:String,
    },
    postId: {
        type:String,
    }
    
},{timestamp:true}
);

export default mongoose.model("appliedPost",appliedPostSchema);