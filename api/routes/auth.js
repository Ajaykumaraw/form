import express from 'express';
import { register ,userLogin} from '../controllers/auth.js';

const router = express.Router();

router.get("/",(req, res)=>{
    console.log('hello');
    res.send("Hello, This is auth endpoint");
})
 //register user endpoint
router.post("/register",register)
//user login endpoint
router.post("/login",userLogin)

export default router; 