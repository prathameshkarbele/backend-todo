import express from "express";
// import mongoose from "mongoose";
import routerData from "./route.js"
import taskRouter from "./modelTask.js"
import {ConntectDb} from "./DataBse/Mongodata.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./error.js";
// import { newTask } from "./routeTask.js";
import cors from "cors";
import { get } from "mongoose";

const app = express();
// const router = express.Router()

// creating dotEnv file for securing our Links
config({
    path:"./DataBse/config.env"
});
//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: http://localhost:5173,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,

// 
  })
);


// addding databse
ConntectDb()

console.log(process.env.PORT)






// using routes
app.use("/api/v1/users",routerData)
app.use("/api/v1/task", taskRouter)
app.get("/",(req,res)=>{
  res.send("Nice Working")
})

app.use(errorMiddleware)



app.listen(process.env.PORT,(req,res)=>{
    console.log(`Express is conected. Port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})