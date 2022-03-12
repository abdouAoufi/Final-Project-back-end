import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
    name: { type: Schema.Types.String, required: true, default: "no_user_name" },
    email: { type: Schema.Types.String, required: true, default: "no_email" },
    password: { type: Schema.Types.String, required: true },
    profilePicUrl: { type: Schema.Types.String, required: false },
});

export default model("User", userSchema);