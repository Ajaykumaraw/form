import express from 'express';
import Hotel from '../models/hotel.js';
import {createError} from '../utils/error.js';
import { createHotel, deleteHotel, getHotels, getSingleHotel, updateHotel } from '../controllers/hotel.js';
const router = express.Router();


//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel );
//GET ONE
router.get("/:id",getSingleHotel) ;
//GET ALL
router.get("/", getHotels) ;

  

export default router;