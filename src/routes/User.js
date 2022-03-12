import { Router } from "express";
import { createUser, updateUser, deleteUser } from "../controller/User.js";

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.put("/signup", updateUser);
userRouter.delete("/signup", deleteUser);

export default userRouter;