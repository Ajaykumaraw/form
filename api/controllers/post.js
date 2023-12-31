import Post from "../models/post.js";

export const createPost = async (req,res,next)=>{
    const newPost = new Post(req.body);
    console.log(newPost)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        next(error);
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

export const getPost = async (req,res,next)=>{
    try {
        const allPost =  await Post.find(); 
           res.status(200).json(allPost);
       }catch (error) {
        next(error);
    }
}

export const getSinglePost = async (req,res,next)=>{
    try {
        const singlePost =  await Post.findById(req.params.id); 
           res.status(200).json(singlePost);
       } catch (error) {
        next(error);
    }
}