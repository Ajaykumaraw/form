import express from 'express';
import post from '../models/post.js';
import {createError} from '../utils/error.js';
import { createPost, deletePost, getPost, getSinglePost, updatePost } from '../controllers/post.js';
const router = express.Router();


//CREATE
router.post("/", createPost);
//UPDATE
//router.put("/:id", updateUser);
//DELETE
//router.delete("/:id", deleteUser);
//GET ONE
//router.get("/:id",getSingleUser) ;
//GET ALL
//router.get("/", getUser) ;

  

export default router;