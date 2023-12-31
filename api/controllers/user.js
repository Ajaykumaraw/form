import User from "../models/user.js";
import fs from "fs";

let imagefolder = "filename3";
 let uploadPath = `uploads/${imagefolder}`;


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


export const getEducationDetails = async (req,res,next)=>{
    console.log(req.body)
    const {college,degree,field,school,year } =  req.body;
    try {
        const singleUser =  await User.findOneAndUpdate({"email":req.body.email},
            {"educationDetails":{college,degree,field,school,year}})
        res.status(200).json({"status":201,"message":"Education details updated"})
       } catch (error) {
        console.log(error);
       // next(error);
    }
}


export const saveFilePathInDb = async (email,filename)=>{
    try {
        const singleUser =  await User.findOneAndUpdate({"email":email}, { $push:{"documents":`${"/"+filename}`}})
       // res.status(200).json({"status":201,"message":"documents updated"})
       } catch (error) {
        console.log(error);
       // next(error);
    }
}

export const showImages = async (req, res)=>{
    
      //  const imageName = req.params.imageName;
        const imagePath = __dirname + '/uploads/filename3'+1704171729736-slider1.png;
      
        // Send the image file in the response
        res.sendFile(imagePath);
}



