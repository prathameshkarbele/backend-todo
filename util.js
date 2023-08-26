import  Jwt  from "jsonwebtoken";

export const SentCookies = (user,res,message, statusCode) =>{
    const token = Jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(statusCode).cookie("token", token,{
      httpOnly:true,
      maxAge: 15*60*1000,
      sameSite:process.env.NODE_ENV===DEVLOPMENT ? "lax":"none",
      secure:process.env.NODE_ENV===DEVLOPMENT ? false:true
  
    }).json({
      Sucess: true,
      message
    });
}