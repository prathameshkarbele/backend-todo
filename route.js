import  express  from "express";

import {allUser, register, getMyProfile,login,logout} from "./controller.js";
import {isAuthinthicated}   from "./Auth.js";


const router = express.Router();


router.get("/all",allUser)

router.post("/new",register)
router.post("/login",login)
router.get("/logout",logout)


router.get("/me", isAuthinthicated , getMyProfile)


export default router;