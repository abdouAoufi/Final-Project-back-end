import express from "express";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/User.js";
import postRouter from "./routes/Post.js";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.post("/upload", function(req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    multer({ storage: fileStorage, fileFilter: fileFilter }).single("image");
});

app.use("*", (req, res) => {
    res.json({ message: "not here please" });
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () =>
            console.log("server started at 1337")
        );
    })
    .catch((err) => console.log("faild to connect db"));