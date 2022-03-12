import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;
const types = Schema.Types;

const postSchema = new Schema({
    postCreator: { type: types.String, required: true },
    description: { type: types.String, required: false },
    imgUrl: { type: types.String, required: false },
    postInfo: {
        likes: { type: types.Number, required: false, default: 0 },
        share: { type: types.Number, required: false, default: 0 },
        comments: [{
            commentCreator: { type: types.String, required: true },
            comment: { type: types.String, required: true },
        }, ],
    },
});


export default model("Post", postSchema)