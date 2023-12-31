import express from 'express';
import { register } from '../controllers/auth.js';

const router = express.Router();

router.get("/",(req, res)=>{
    console.log('hello');
    res.send("Hello, This is auth endpoint");
})
 //create user
router.post("/register",register)

export default router; 