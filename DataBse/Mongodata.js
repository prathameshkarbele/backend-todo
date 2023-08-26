import mongoose from "mongoose"

export const ConntectDb = () =>{
    mongoose.connect(process.env.MONGO_URL,{
    dbName:"userData",
}).then((c)=>{
    console.log(`Database is conntected with ${c.connection.host}`)
}).catch((err)=>{
    console.log(err)
})
}