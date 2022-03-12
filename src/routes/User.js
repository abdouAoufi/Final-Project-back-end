import { Router } from "express";
import {
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} from "../controller/User.js";

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.put("/signup", updateUser);
userRouter.delete("/signup", deleteUser);

userRouter.post("/login", loginUser);

export default userRouter;