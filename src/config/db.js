import mongoose from "mongoose";

const LOCAL_DB_URL = "mongodb://127.0.0.1:27017/flow";
const CLOUD_DB_URL = "";

export const connectDB = () => {
    return mongoose.connect(LOCAL_DB_URL);
};