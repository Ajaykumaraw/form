import express from 'express';
import user from '../models/user.js';
import {createError} from '../utils/error.js';
import { createUser, deleteUser, getUser, getSingleUser, updateUser,
    getEducationDetails } from '../controllers/user.js';
const router = express.Router();


//CREATE
router.post("/", createUser);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET ONE
router.get("/:id",getSingleUser) ;
//GET ALL
router.get("/", getUser) ;

//SUBMIT EDUCATION DETIALS 
router.post("/eduDetails",getEducationDetails)

  

export default router;