import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import hotelsRoutes from "./routes/hotels.js";
import postRoutes from "./routes/post.js";
import appliedPost from "./routes/appliedPost.js";


const app = express();
app.use(cors())
dotenv.config();
const PORT = 8080;


const dbUrl = 'mongodb://localhost:27017/Form';


const connect = async () =>{
    try{
        await mongoose.connect(dbUrl);
        console.log('db connected');
    }catch(error){
        throw error;
    }  
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected!");
});

mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected!");
}); 


// app.use(express.json);
// app.get("",(req,res)=>{
//     res.send("i am working bro!!");
// })
app.use(express.json());
app.use(express.static('public'));

app.use("/api/auth",authRoutes);
app.use("/api/user",usersRoutes);
app.use("/api/post",postRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/appliedPost",appliedPost);

//middlewares
app.use((err,req,res,next) => { 
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    console.log("hi i am middleware");
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
});

app.listen(PORT,() => {
    connect();
    console.log(`app listing on port ${PORT}`)
})

 