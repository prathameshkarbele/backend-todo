import mongoose from "mongoose"

export const ConntectDb = () =>{
    mongoose.connect(process.env.MONGO_URL,{
    dbName:"userData",
}).then(()=>{
    console.log("DataBase is Connected")
}).catch((err)=>{
    console.log(err)
})
}