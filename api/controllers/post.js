import Post from "../models/post.js";
import User from "../models/user.js";

export const createPost = async (req,res,next)=>{
    console.log(req.body);
    const newPost = new Post(req.body);
    console.log(newPost)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        console.log(error)
        // next(error);
    }
}

export const updatePost = async (req,res,next)=>{
   
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body},{new:true})
        res.status(200).json(updatedPost);
        //console.log(updatedPost);
    } catch (error) {
        next(error);
    }
}

export const deletePost = async (req,res,next)=>{
    try {
        await Post.findByIdAndDelete(req.params.id); 
        res.status(200).json("Post is deleted");
    } catch (error) {
        next(error);
    }
}

export const getAllPost = async (req,res,next)=>{
    try {
        const allPost =  await Post.find(); 
           res.status(200).json(allPost);
       }catch (error) {
        next(error);
    }
}

export const getSinglePost = async (req,res,next)=>{
    try {
        const singlePost =  await Post.findById(req.params._id); 
           res.status(200).json(singlePost);
       } catch (error) {
        next(error);
    }
}


export const applyPost = async(req,res)=>{
    console.log(req.body)
    const postId = req.body.PostId;
    try {
        const singleUser =  await User.findOneAndUpdate({"email":req.body.userId},
        {$push:{"appliedFor":`${postId}`}})
       // console.log(singleUser)
        res.status(200).json({"status":201,"message":"post applied successful"})
       } catch (error) {
        console.log(error);
       // next(error);
    }
}



export const getAppliedPost = async(req,res)=>{
    const email = req.body.email;
    try {
        const singleUser =  await User.findOne({"email":email})
        const arrayToFind = singleUser.appliedFor;
        const appliedPost = await Post.find({"_id":{"$in":arrayToFind}})
        res.status(200).json({"status":201,"appliedPost":appliedPost})
       } catch (error) {
        console.log(error);
       // next(error);
    }
}