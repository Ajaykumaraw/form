import express from 'express';
import post from '../models/post.js';
import {createError} from '../utils/error.js';
import { createPost, deletePost, getSinglePost, updatePost ,getAllPost,applyPost,getAppliedPost} from '../controllers/post.js';
const router = express.Router();


//CREATE
router.post("/", createPost);
//GET ALL POSTS
router.get("/getAllpost", getAllPost);
//UPDATE
//router.put("/:id", updateUser);
//DELETE
//router.delete("/:id", deleteUser);
//GET SINGLE POST
router.get("/:_id",getSinglePost) ;
//GET ALL
//router.get("/", getUser) ;
router.post("/applyPost",applyPost) ;
//GET APPLIED POSTS
router.post("/getAppliedPost",getAppliedPost) ;


  

export default router;