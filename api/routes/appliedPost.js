import express from 'express';
import {createError} from '../utils/error.js';
import { createAppliedPost, deleteAppliedPost, getPost, getSingleAppliedPost } from '../controllers/appliedPost.js';
const router = express.Router();


//CREATE
router.post("/", createAppliedPost);
//UPDATE
//router.put("/:id", updateUser);
//DELETE
//router.delete("/:id", deleteUser);
//GET ONE
//router.get("/:id",getSingleUser) ;
//GET ALL
//router.get("/", getUser) ;

  

export default router;