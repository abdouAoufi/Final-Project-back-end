import { Router } from "express";
import { createUser } from "../controller/User.js";

const userRouter = Router();

userRouter.post("/signup", createUser);


export default userRouter;