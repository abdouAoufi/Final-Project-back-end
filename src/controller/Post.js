import Post from "../model/Post.js";

export const createPost = (req, res) => {
    const postInfo = req.body;
    const post = new Post(postInfo);

    post
        .save()
        .then((user) => {
            res.status(201).json({ message: "Your post  created" });
        })
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const getAllPost = (req, res) => {
    Post.find({})
        .exec()
        .then((posts) => {
            res.status(200).json({ posts: posts });
        })
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const updatePost = (req, res) => {
    const postID = req.query.postid;
    const isLiked = req.body.isLiked;
    Post.findById(postID.toString())
        .exec()
        .then((res) => {
            const currnetLikes = res.postInfo.likes;
            if (isLiked === true) {
                res.postInfo.likes = currnetLikes + 1;
            } else {
                res.postInfo.likes = currnetLikes - 1;
            }
            res.save();
        })
        .catch((err) => {
            console.log(err);
        });
};