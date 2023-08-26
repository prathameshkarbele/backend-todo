import express from "express";
import  {deleteTask, getMytask, newTask, updateTask}  from "./routeTask.js";
import { isAuthinthicated } from "./Auth.js";

const router = express.Router();

router.post("/new", isAuthinthicated,  newTask)
router.get("/my", isAuthinthicated,  getMytask)
router.route("/:id").put(isAuthinthicated, updateTask).delete(isAuthinthicated, deleteTask)

export default router;