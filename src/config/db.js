import mongoose from "mongoose";

const LOCAL_DB_URL = "mongodb://127.0.0.1:27017/flow";
const CLOUD_DB_URL = "mongodb+srv://hello:1234@firsttry.vojoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export const connectDB = () => {
    return mongoose.connect(CLOUD_DB_URL);
};