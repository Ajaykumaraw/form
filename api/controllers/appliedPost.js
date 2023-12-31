import AppliedPost from "../models/appliedPost.js";

export const createAppliedPost = async (req,res,next)=>{
    const newPost = new AppliedPost(req.body);
    console.log(newPost)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        next(error);
    }
}

export const updateAppliedPost = async (req,res,next)=>{
   
    try {
        const updatedPost = await AppliedPost.findByIdAndUpdate(req.params.id,{
            $set:req.body},{new:true})
        res.status(200).json(updatedPost);
        //console.log(updatedPost);
    } catch (error) {
        next(error);
    }
}

export const deleteAppliedPost = async (req,res,next)=>{
    try {
        await AppliedPost.findByIdAndDelete(req.params.id); 
        res.status(200).json("Post is deleted");
    } catch (error) {
        next(error);
    }
}

export const getPost = async (req,res,next)=>{
    try {
        const allPost =  await AppliedPost.find(); 
           res.status(200).json(allPost);
       }catch (error) {
        next(error);
    }
}

export const getSingleAppliedPost = async (req,res,next)=>{
    try {
        const singlePost =  await AppliedPost.findById(req.params.id); 
           res.status(200).json(singlePost);
       } catch (error) {
        next(error);
    }
}