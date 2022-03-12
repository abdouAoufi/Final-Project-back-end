import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/User.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());
app.use(userRouter);

connectDB()
    .then(() => {
        app.listen(1337, () => console.log("server started at 1337"));
    })
    .catch((err) => console.log("faild to connect db"));