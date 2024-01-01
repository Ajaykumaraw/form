import user from "../models/user.js"



//register user
export const register = async (req,res,next)=>{
    try {
      const newUser = new user({
            username : req.body.username,
            email:req.body.email,
            password : req.body.password
        });
        await newUser.save();
        res.status(201).send("user has been created");
    } catch (error) {
        next(error)
    }
}

export const userLogin = async( req,res,next)=>{
    try {
      const foundUser = await user.findOne({email:req.body.email});
      if(req.body.password === foundUser.password){
        res.json({"message":"login success","isAuth":"ture"})
      }
    } catch (error) {
        console.log(error);
    }
}