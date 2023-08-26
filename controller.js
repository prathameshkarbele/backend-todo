import { Userdata } from "./user.js";
import bcrypt from "bcrypt";
import {SentCookies} from "./util.js"
// import  Jwt  from "jsonwebtoken";


export const allUser = async (req, res) => {};

export const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await Userdata.findOne({Email:email}).select("+Password")
  
  if (!user) {
    return res.status(404).json({
      Sucess: false,
      message: "Invalid Email Or Password",
    });
  }

  const isMatch = await bcrypt.compare(password,user.Password)

  if (!isMatch) {
    return res.status(404).json({
      Sucess: false,
      message: "Invalid Email Or Password",
    });
  }

  SentCookies(user, res, `Welcome back , ${user.Name}`, 200)

};




export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await Userdata.findOne({ Email: email });

  if (user) {
    return res.status(404).json({
      Sucess: false,
      message: "User Already exist",
    });
  }
  const HashPass = await bcrypt.hash(password, 10);

  user = await Userdata.create({ Name: name, Email: email, Password: HashPass});
  
  SentCookies(user,res,"Register Succesfully", 201 )
 
};



export const getMyProfile = (req, res) => {

//  const id = "myId";



 res.status(200).json({
  Sucess:true,
  user:req.user 
  
 }) 


};

export const logout = (req,res) =>{
  res.status(200).cookie("token","",{expires:new Date(Date.now()),
  sameSite:process.env.NODE_ENV==="DEVLOPMENT" ? "lax":"none",
  secure:process.env.NODE_ENV==="DEVLOPMENT" ? false:true
  }).json({
    Sucess:true,
    user:req.user 
   })
}