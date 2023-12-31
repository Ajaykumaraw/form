import User from "../models/user.js";

export const createUser = async (req,res,next)=>{
    console.log(req.body)
    const newUser = new User(req.body);
    console.log(newUser)
    try {
        const savedUser = await newUser.save();
        res.status(200).json({"message":"Ok","username":savedUser.username});
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req,res,next)=>{
   
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body},{new:true})
        res.status(200).json(updatedUser);
        //console.log(updatedUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id); 
        res.status(200).json("User is deleted");
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req,res,next)=>{
    try {
        const allUser =  await User.find(); 
           res.status(200).json(allUser);
       }catch (error) {
        next(error);
    }
}

export const getSingleUser = async (req,res,next)=>{
    try {
        const singleUser =  await User.findById(req.params.id); 
           res.status(200).json(singleUser);
       } catch (error) {
        next(error);
    }
}