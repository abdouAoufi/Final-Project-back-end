import { createPost, getAllPost, updatePost } from "../controller/Post.js";
import { Router } from "express";

const postRouter = Router();

postRouter.post("/post", createPost);
postRouter.get("/post", getAllPost);

postRouter.put("/post", updatePost);

export default postRouter;