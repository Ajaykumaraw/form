import Hotel from "../models/hotel.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        next(error);
    }
}

export const updateHotel = async (req,res,next)=>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{
            $set:req.body},{new:true})
        //update hotel
        res.status(200).json(updatedHotel);
    } catch (error) {
        next(error);
    }
}

export const deleteHotel = async (req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id); 
        res.status(200).json("Hotel has been deleted");
    } catch (error) {
        next(error);
    }
}

export const getHotels = async (req,res,next)=>{
    try {
        const allHotels =  await Hotel.find(); 
           res.status(200).json(allHotels);
       }catch (error) {
        next(error);
    }
}

export const getSingleHotel = async (req,res,next)=>{
    try {
        const singleHotel =  await Hotel.findById(req.params.id); 
           res.status(200).json(singleHotel);
       } catch (error) {
        next(error);
    }
}
