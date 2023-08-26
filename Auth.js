import { Userdata } from "./user.js";
import  Jwt  from "jsonwebtoken";

export const isAuthinthicated =async(req, res, next) =>{

    const {token} = req.cookies


    if(!token){
     return res.status(404).json({
       Sucess:false,
       message:"Login First"
     });
    }
   
    const decoded = Jwt.verify(token, process.env.JWT_SECRET)
     console.log(token)
   
     req.user = await Userdata.findById(decoded._id)
     next()
     
}